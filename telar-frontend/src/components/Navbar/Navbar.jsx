import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");
  const navigateToLogin = () => navigate("/login");
  const navigateToRegister = () => navigate("/register");

  const [userIsLoged, setUserIsLoged] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    setUserIsLoged(!userIsLoged);
  };

  const getUserIsLoged = async () => {
    const body = {
      username: "kminchelle",
      password: "0lelplR",
    };
    const res = await axios.post("https://dummyjson.com/auth/login", body);
    if (res.status === 200) {
      const token = res.data.token;
      localStorage.setItem("token", token);
      setUserIsLoged(true);
    }
  };

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      getUserIsLoged();
    } else {
      setUserIsLoged(true);
    }
  }, []);

  

  return (
    <div className="container-fluid">
      <div className="row justify-content-between navbar">
        <div className="menu">
          <button className="homeButton" onClick={navigateToHome}>
            Home
          </button>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search here"
           
            >
            </input>
        </div>
        {!userIsLoged ? (
          <div className="loginregister">
            <button className="login-register-button" onClick={navigateToLogin}>
              Login
            </button>
            <button
              className="login-register-button"
              onClick={navigateToRegister}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="loginregister">
            <button className="login-register-button" onClick={logOut}>
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
