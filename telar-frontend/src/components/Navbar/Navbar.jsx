import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const Navbar = ()=> {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/")
  const navigateToLogin = () => navigate("/login")
  const navigateToRegister = () => navigate("/register")


  return (
    <div className="container-fluid">
      <div className="row justify-content-between navbar">
        <div className="menu">
          <button className="homeButton" onClick={navigateToHome}>Home</button>
        </div>
        <div className="loginregister">
          <button className="login-register-button" onClick={navigateToLogin}>Login</button>
          <button className="login-register-button" onClick={navigateToRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;