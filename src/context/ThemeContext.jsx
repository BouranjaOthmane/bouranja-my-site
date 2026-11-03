import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, toggleDarkMode] = useState(
        localStorage.getItem("isDarkMode") || "dark"
    );

    useEffect(() => {
        const root =window.document.documentElement;
        if(isDarkMode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("isDarkMode", isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode: isDarkMode === "dark", toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>

    );
};

export const useTheme = () => useContext(ThemeContext);