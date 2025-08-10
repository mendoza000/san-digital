"use client";

import { useTheme } from "@/hooks/use-theme";
import { createContext, ReactNode, useContext } from "react";

type ThemeContextType = {
	theme: "light" | "dark" | "system";
	setTheme: (theme: "light" | "dark" | "system") => void;
	resolvedTheme: "light" | "dark";
	systemTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const themeData = useTheme();

	return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return context;
}
