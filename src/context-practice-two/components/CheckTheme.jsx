import React, {useEffect, useState} from 'react'
import {ThemeContextProvider} from "./ThemeContext.jsx";
import {ThemeDisplay} from "./ThemeDisplay.jsx";

export const CheckTheme = () => {
    const [ThemeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
        setThemeMode('light');
    }

    const darkTheme = () => {
        setThemeMode('dark');
    }

    // useEffect(() => {
    //     document.querySelector('html').classList.remove('light', 'dark');
    //     document.querySelector('html').classList.add(ThemeMode);
    // }, [ThemeMode]);
    return (
        <ThemeContextProvider value={{ThemeMode, lightTheme, darkTheme}}>
            <div>
                <ThemeDisplay/>
            </div>
        </ThemeContextProvider>

    )
}
