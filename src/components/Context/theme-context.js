import React from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#F2FBEF"
    },
    dark: {
        foreground: "rgb(244, 93, 34)", // 
        background: "rgb(0, 0, 0)" // #007b5e
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});
