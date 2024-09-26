import React, { FC } from "react";
import { useTheme } from "../hooks/use-theme.ts";

export const ThemeToggle: FC = () => {
	const { theme, setTheme } = useTheme();

	const handleThemeClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className="theme-toggle__groups">
			<button className="theme-toggle" onClick={handleThemeClick}>
				{theme === "light" ? "☀️" : "🌔"}
			</button>
		</div>
	);
};
