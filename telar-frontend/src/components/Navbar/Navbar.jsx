import React, { useEffect, useState } from "react";
import "./styles.scss";
import InputSearch from "../Search/imputSearch.jsx";
import HomeButton from "../HomeButton/HomeButton.jsx";
import Categories from "../Categories/Categories.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [categories, setCategories] = useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const navigate = useNavigate()
7
  const logOut = () => {
    localStorage.removeItem("token");
    setUserIsLogged(false);
  };

  const fetchCategories = async () => {
    const products = await fetch("https://dummyjson.com/products/categories");
    const data = await products.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserIsLogged(true);
    }
  }, []);

  if (userIsLogged) navigate('/')

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-between navbar">
          <HomeButton />
          <InputSearch value={inputValue} setInputValue={setInputValue} />
          {!userIsLogged ? (
            <div className="loginregister">
              <button
                className="login-register-button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="login-register-button"
                onClick={() => navigate("/register")}
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
      <Categories categories={categories} />
    </div>
  );
};

export default Navbar;
