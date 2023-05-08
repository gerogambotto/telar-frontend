import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./style.scss";

export function RegisterPage() {
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

    if (userName.value === "") {
      setError("Incorrect name");
    } else if (userLastName.value === "") {
      setError("Incorrect last name");
    } else if (!isValidEmail(userMail.value)) {
      setError("Incorrect e-mail");
    } else if (userPassword.value === "") {
      setError("Incorrect password");
    } else if (userPassword.value.length < 5) {
      setError("Incorrect password");
    } else if (userConfirmPassword.value === "") {
      setError("Passwords don t match");
    } else if (userPassword.value !== userConfirmPassword.value) {
      setError("Passwords don t match");
    } else {
      setError(null);
    }
  };

  function isValidEmail(userMail) {
    return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(userMail);
  }

  return (
    <Layout>
      <section className="">
        <div className="form-body-register">
          <form className="form-register" onSubmit={handleSubmit}>
          <div className="title">Registration</div>
            <div>
              <div className="input__box">
                <input
                  {...userName}
                  name="username"
                  placeholder="First name"
                  type={userName.type}
                  value={userName.value}
                  onChange={userName.onChange}
                />
              </div>
            </div>
            <div>
              <div className="input__box">
                <input
                  {...userLastName}
                  name="userLastName"
                  placeholder="Last name"
                  type={userLastName.type}
                  value={userLastName.value}
                  onChange={userLastName.onChange}
                />
              </div>
            </div>
            
            <div className="input__box">
              <input
                {...userMail}
                name="userMail"
                placeholder="Email"
                type={userMail.type}
                value={userMail.value}
                onChange={userMail.onChange}
              />
            </div>

            <div className="input__box">
              <input
                {...userPassword}
                name="Password"
                placeholder="Password"
                type={userPassword.type}
                value={userPassword.value}
                onChange={userPassword.onChange}
              />
            </div>

            <div className="input__box">
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
              <button className="register-button">Register</button>
              {error && <h5 style={{ color: "red" }}>{error}</h5>}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
