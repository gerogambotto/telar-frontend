import React from "react";
import { useNavigate } from "react-router-dom";

export function Loginregister() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToRegister}>Register</button>
    </div>
  );
}
