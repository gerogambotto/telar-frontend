import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginregister.scss";

export function Loginregister() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="loginregister">
      <button className="login-register-button" onClick={navigateToLogin}>Login</button>
      <button className="login-register-button" onClick={navigateToRegister}>Register</button>
    </div>
  );
}
