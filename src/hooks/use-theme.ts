"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
	const [theme, setTheme] = useState<Theme>("system");
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

	// Detectar el tema del sistema
	const getSystemTheme = (): "light" | "dark" => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		return "light";
	};

	useEffect(() => {
		// Inicializar con el tema del sistema
		const systemTheme = getSystemTheme();
		setResolvedTheme(systemTheme);

		// Escuchar cambios en las preferencias del sistema
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e: MediaQueryListEvent) => {
			if (theme === "system") {
				setResolvedTheme(e.matches ? "dark" : "light");
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	// Actualizar el tema resuelto cuando cambia la preferencia manual
	useEffect(() => {
		const newResolvedTheme = theme === "system" ? getSystemTheme() : theme;
		setResolvedTheme(newResolvedTheme);
	}, [theme]);

	// Aplicar el tema al DOM
	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(resolvedTheme);
	}, [resolvedTheme]);

	return {
		theme,
		setTheme,
		resolvedTheme,
		systemTheme: getSystemTheme(),
	};
}
