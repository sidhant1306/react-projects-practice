import React, {useContext, useState} from 'react'
import {theme, ThemeContext} from "./ThemeContext.jsx";



export const Button = () => {

    const mode = useContext(theme);
    const [newTheme, setNewTheme] = useState('');
    const changeHandler = () => {

        if(mode === 'light') {
            setNewTheme('dark');
        }else setNewTheme('light');
        localStorage.setItem('currTheme', newTheme);
        console.log(mode);
    }
    return (
        <div>
            <h1>Current theme : {newTheme}</h1>
           <button onClick={changeHandler}>Change theme</button>
        </div>
    )
}
