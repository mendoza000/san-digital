"use client";

import { useThemeContext } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeToggle() {
	const { theme, setTheme } = useThemeContext();

	const toggleTheme = () => {
		const themes = ["light", "dark", "system"] as const;
		const currentIndex = themes.indexOf(theme);
		const nextTheme = themes[(currentIndex + 1) % themes.length];
		setTheme(nextTheme);
	};

	const getIcon = () => {
		switch (theme) {
			case "light":
				return <Sun className="h-4 w-4" />;
			case "dark":
				return <Moon className="h-4 w-4" />;
			case "system":
				return <Monitor className="h-4 w-4" />;
		}
	};

	const getLabel = () => {
		switch (theme) {
			case "light":
				return "Tema claro";
			case "dark":
				return "Tema oscuro";
			case "system":
				return "Tema del sistema";
		}
	};

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={toggleTheme}
			className="h-9 w-9 p-0"
			title={getLabel()}
		>
			{getIcon()}
			<span className="sr-only">{getLabel()}</span>
		</Button>
	);
}
