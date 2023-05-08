import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  return (
    <div className="menu">
      <button className="homeButton" onClick={navigateToHome}>
        <img
          className="logo"
          src="../../../assets/logos/telar_logo.png"
        />
      </button>
    </div>
  );
}

export default HomeButton;
