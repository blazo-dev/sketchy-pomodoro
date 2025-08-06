import { useEffect, useState } from "react";

export const useThemeToggle = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useState(prefersDarkMode.matches);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return { isDark, toggleTheme };
};
