import React from 'react'
import userContextProvider from "./context/UserContextProvider.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import {Login} from "./components/Login.jsx";
import {WelcomePage} from "./components/WelcomePage.jsx";

export const App = () => {
    return (
        <UserContextProvider>
            <h1>React with sidhant nigga</h1>
            <Login/>
            <WelcomePage/>
        </UserContextProvider>
    )
}
