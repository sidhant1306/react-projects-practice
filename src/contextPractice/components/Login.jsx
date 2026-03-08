import React, {useContext, useState} from 'react'
import UserContext from "../context/UserContext.jsx";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // getting value from the contextApi :

    const {setUser} = useContext(UserContext);
    const btnHandler = (e) => {
        // now we need to prevent default behaviour of the submit button, because,
        // everytime we submit something, it passes us to some url
        e.preventDefault();
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type = 'text'
                placeholder = 'username'
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input
                type = 'text'
                placeholder = 'password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button onClick={btnHandler}>Click me</button>
        </div>
    )
}
