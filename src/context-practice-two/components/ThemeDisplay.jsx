import React, {useEffect} from 'react'
import useThemeContext from "./ThemeContext.jsx";
import {CheckTheme} from "./CheckTheme.jsx";

export const ThemeDisplay = () => {
    const {ThemeMode, lightTheme, darkTheme} = useThemeContext();

    // useEffect(() => {
    //     CheckTheme();
    // }, [ThemeMode]);

    const btnHandler = () => {
        if(ThemeMode === 'light') darkTheme();
        else lightTheme();
    }
    return (
        <div>
            <h2>Current theme : {ThemeMode}</h2>
            <button onClick={btnHandler}>Change theme</button>
        </div>
    )
}
