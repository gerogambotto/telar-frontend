import React from "react";
import { useNavigate } from "react-router-dom";

export function Menu() {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/home")
    }

    return (
        <div>
            <button onClick={navigateToHome}>Home</button>
        </div>
    )
}