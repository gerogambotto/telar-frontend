import React, { useState } from "react";
import "./style.scss";
import {Menu} from "../../components/menu.jsx"

export function Register() {
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

  const userName = useField({ type: "text" });
  const userLastName = useField({ type: "text" });
  const userMail = useField({ type: "text" });
  const userPassword = useField({ type: "password" });
  const userConfirmPassword = useField({ type: "password" });

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (userName.value == "") {
      setError("Name is Empty");
    } else if (userLastName.value == "") {
      setError("Last Name is Empty");
    } else if (!isValidEmail(userMail.value)) {
      setError("Email is invalid");
    } else if (userPassword.value == "") {
      setError("Password is Empty");
    } else if (userPassword.value.length < 5) {
      setError("Please enter a correct Password");
    } else if (userConfirmPassword.value == "") {
      setError("Confirm Password is Empty");
    } else if (userPassword.value != userConfirmPassword.value) {
      setError("Passwords don t match");
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
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            {...userName}
            name="username"
            placeholder="First name"
            type={userName.type}
            value={userName.value}
            onChange={userName.onChange}
          />
        </div>
        <div>
          <input
            {...userLastName}
            name="userLastName"
            placeholder="Last name"
            type={userLastName.type}
            value={userLastName.value}
            onChange={userLastName.onChange}
          />
        </div>
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
          <input
            {...userConfirmPassword}
            name="confirmPassword"
            placeholder="Confirm Password"
            type={userConfirmPassword.type}
            value={userConfirmPassword.value}
            onChange={userConfirmPassword.onChange}
          />
        </div>
        <div>
          <button>Register</button>
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
        </div>
      </form>
    </div>
  </div>
  );
}
