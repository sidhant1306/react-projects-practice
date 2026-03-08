import React from 'react'
import {useNavigate} from "react-router-dom";
import {ReturnHome} from "../components/user-components/ReturnHome.jsx";
import useUContext from "../context/UserContext.jsx";

export const Home = () => {
    let navigate = useNavigate();
    const {currUser} = useUContext();
    const GoToDash = () => {
        if(currUser) navigate('/Dashboard');
        else alert("Please login first");
    }
    return (
        <div className="page home-page">
            <div className="auth-card">
                <h1 className="app-title">Task Manager</h1>
                <p className="app-subtitle">Keep your tasks organized by account</p>
                <div className="button-row">
                    <button className="btn primary" onClick={() => {navigate('/login')}}>
                        Login
                    </button>
                    <button className="btn secondary" onClick={() => {navigate('/register')}}>
                        Register
                    </button>
                </div>
                <button className="btn ghost" onClick={GoToDash}>Go to dashboard</button>
            </div>
            <ReturnHome/>
        </div>
    )
}
