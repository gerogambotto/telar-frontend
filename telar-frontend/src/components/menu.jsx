import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/menu.scss";

export function Menu() {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/home")
    }

    return (
        <div className="menu">
            <button className="homeButton" onClick={navigateToHome}>Home</button>
        </div>
    )
}