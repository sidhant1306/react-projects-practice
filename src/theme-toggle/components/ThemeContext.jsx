import React, {createContext, useState} from 'react'
export const theme = createContext('');
export const ThemeContext = (props) => {


    return (
        <div>
            <theme.Provider value ={localStorage.getItem('currTheme')}>
                {props.children}
            </theme.Provider>

        </div>
    )
}
