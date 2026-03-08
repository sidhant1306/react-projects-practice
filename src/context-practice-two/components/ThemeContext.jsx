import React, {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    ThemeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useThemeContext () {
    return useContext(ThemeContext)
}
