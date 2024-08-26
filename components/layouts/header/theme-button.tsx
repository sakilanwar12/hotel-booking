"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Sun
          className="w-5 h-5 text-default-700 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Moon
          className="w-5 h-5 text-default-700 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ThemeButton;
