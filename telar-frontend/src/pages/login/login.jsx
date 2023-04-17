import React, { useState } from "react";
import "./style.scss";
import {Menu} from "../../components/menu.jsx"

export function Login() {
    const useField = ({ type }) => {
      const [value, setValue] = useState("");
      const onChange = (event) => {
        setValue(event.target.value);
      };
      return {
        type,
        value,
        onChange,
      };
    };
  
   
    const userMail = useField({ type: "text" });
    const userPassword = useField({ type: "password" });
  
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setError(null);
  
      if (!isValidEmail(userMail.value)) {
        setError("Email is invalid");
      } else if (userPassword.value == "") {
        setError("Incorrect Password");
      } else if (userPassword.value.length < 5) {
        setError("Incorrect Password");
      } else {
        console.log("Submited");
        setError(null);
      }
    };
  
    function isValidEmail(userMail) {
      return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(userMail);
    }
  
    return (
      <div>
        <div>
          <Menu />
        </div>
      <div className="form-body-login">
        <form onSubmit={handleSubmit}>            
          <div>
            <input
              {...userMail}
              name="userMail"
              placeholder="Email"
              type={userMail.type}
              value={userMail.value}
              onChange={userMail.onChange}
            />
          </div>
  
          <div>
            <input
              {...userPassword}
              name="Password"
              placeholder="Password"
              type={userPassword.type}
              value={userPassword.value}
              onChange={userPassword.onChange}
            />
          </div>
          
          <div>
            <button className="login-button">Login</button>
            {error && <h5 style={{ color: "red", fontFamily:"system-ui" }}>{error}</h5>}
          </div>
        </form>
      </div>
    </div>
    );
  
  }