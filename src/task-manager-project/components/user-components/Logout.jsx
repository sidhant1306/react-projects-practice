import React from 'react'
import useUContext from "../../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

export const Logout = () => {

    const {setCurrUser} = useUContext();
    const navigate = useNavigate();


        const LogoutHandler = (e) => {
            e.preventDefault();
            // filter out all users except the one we want to remove :
                setCurrUser(null);
                localStorage.setItem('currUser', JSON.stringify(null));
                alert('logged out successfully');
                navigate('/');
        }

        return (
            <button className="btn ghost" onClick={LogoutHandler}>Logout</button>
        )


}
