import React from "react";
import { ThemeContext } from "./theme-context";
import Sidebar from "../Sidebar";

const ThemeChanger = props => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme, btheme }) => (
                <>
                    <Sidebar
                        {...props}
                        bstyle={{
                            backgroundColor: theme.background,
                            color: theme.foreground
                        }}
                        btheme={{
                            backgroundColor: btheme.background,
                            color: btheme.foreground
                        }}
                        toggler={toggleTheme}
                    />
                </>
            )}
        </ThemeContext.Consumer>
    );
};

export default ThemeChanger;
