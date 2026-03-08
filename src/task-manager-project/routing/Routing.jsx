import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import {Login} from "../pages/Login.jsx";
import {Register} from "../pages/Register.jsx";
import {Dashboard} from "../pages/Dashboard.jsx";
import {CreateCard} from "../components/card-components/CreateCard.jsx";
import {Logout} from "../components/user-components/Logout.jsx";

export const Routing = () => {
    return (
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/dashboard' element = {<Dashboard/>} />
            <Route path = '/createCard' element = {<CreateCard />} />
            <Route path = '/logout' element = {<Logout />} />
        </Routes>
    )
}
