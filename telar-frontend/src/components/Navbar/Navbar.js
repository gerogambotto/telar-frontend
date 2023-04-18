import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function Navbar() {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login")

  const navigateToRegister = () => navigate("/register")

  const navigateToHome = () => navigate("/home")

  return (
    <>
      <div className="menu">
        <button className="homeButton" onClick={navigateToHome}>Home</button>
      </div>
      <div className="loginregister">
        <button className="login-register-button" onClick={navigateToLogin}>Login</button>
        <button className="login-register-button" onClick={navigateToRegister}>Register</button>
      </div>
    </>

  );
}
