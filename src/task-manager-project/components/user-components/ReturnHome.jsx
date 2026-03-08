import React from 'react'
import {useNavigate} from "react-router-dom";

export const ReturnHome = () => {
    const navToHome = useNavigate();
    return (
        <button className="btn link" onClick={() => navToHome('/')}>Return to home</button>
    )
}
