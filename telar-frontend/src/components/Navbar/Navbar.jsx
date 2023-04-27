import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import axios from "axios";
import InputSearch from "../Search/imputSearch.jsx";
import HomeButton from "../HomeButton/HomeButton.jsx";
import Categories from "../Categories/Categories.jsx";

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

  /*
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log({ setSearchInput });
  };
  */

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      getUserIsLoged();
    } else {
      setUserIsLoged(true);
    }
  }, []);

  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-between navbar">
          <HomeButton />
          <InputSearch value={inputValue} setInputValue={setInputValue} />
          {!userIsLoged ? (
            <div className="loginregister">
              <button
                className="login-register-button"
                onClick={navigateToLogin}
              >
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
      <Categories />
    </div>
  );
};

export default Navbar;
