import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useThemeToggle } from "../hooks/useToggleTheme";

function ThemeToggle() {
    const { toggleTheme } = useThemeToggle();

    return (
        <button className="absolute right-4 top-4 bg-gray-50 dark:bg-gray-800 w-10 h-10 rounded-full shadow-md border border-gray-500/20 dark:border-gray-600/50 transition-all duration-300 hover:rotate-25 cursor-pointer" onClick={() => toggleTheme()}>
            <IconMoonFilled className="w-full dark:hidden text-gray-800" />
            <IconSunFilled className="w-full hidden dark:inline text-amber-200" />
        </button>

    )
}

export default ThemeToggle