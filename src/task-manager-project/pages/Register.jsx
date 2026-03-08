import React, {useState} from 'react'
import useUContext from "../context/UserContext.jsx";
import {ReturnHome} from "../components/user-components/ReturnHome.jsx";
import {useNavigate} from "react-router-dom";

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const {users, createUser} = useUContext();

    const navigate = useNavigate();

    const btnHandler = (e) => {
        e.preventDefault();
        if(repeatPass !== password) {
            alert('passwords do not match')
            return
        }

        const existingUser = users.find((prev) => prev.username === username)
        if(existingUser) alert('user already exists, Please login')
        if(existingUser){
            navigate('/login');
            return;
        }
        if(username === '' || password === '' || email === '') {
            alert('Please enter valid details')
            return
        }
        addUser();
    }

    const addUser = () => {
        alert('user added successfully');
        createUser({username : username, password : password, email : email})
        navigate('/login');
    }
    return (
        <div className="page auth-page">
            <ReturnHome/>
            <div className="auth-card">
                <h2>Register</h2>
                <form className="auth-form" onSubmit={btnHandler}>
                    <input
                        className="text-input"
                        type='text'
                        placeholder='Enter a username'
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <input
                        className="text-input"
                        type='email'
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type='password'
                        placeholder='Set a new password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type='password'
                        placeholder='Repeat password'
                        onChange={(e) => setRepeatPass(e.target.value)}
                    />

                    <button className="btn primary full-width">Register</button>
                </form>
            </div>
        </div>
    )
}
