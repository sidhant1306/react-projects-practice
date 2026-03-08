import React, {useState} from 'react'
import {ReturnHome} from "../components/user-components/ReturnHome.jsx";
import {useNavigate} from "react-router-dom";
import useUContext from "../context/UserContext.jsx";

export const Login = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const {users, setCurrUser} = useUContext();
    const navigate = useNavigate();
    const isValid = (e) => {
        console.log('in isValid')
        e.preventDefault();
        let validUser = users.find((prev) => prev.username === enteredUsername && prev.password === enteredPass);

        if(validUser) {
            setCurrUser(validUser);
            navigate('/dashboard')
        }
        else {
            alert('wrong username/password, Please try again!')
            navigate('/login');
        }
        console.log(users);
    }
    return (
        <div className="page auth-page">
            <ReturnHome/>
            <div className="auth-card">
                <h2>Login</h2>
                <form className="auth-form" onSubmit={isValid}>
                    <input
                        className="text-input"
                        type='text'
                        placeholder='Enter username'
                        onChange={(e) => setEnteredUsername(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type='password'
                        placeholder='Enter password'
                        onChange={(e) => setEnteredPass(e.target.value)}
                    />
                    <button className="btn primary full-width">Login</button>
                </form>
            </div>
        </div>
    )
}
