import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./style.scss";

export function LoginPage() {
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
    } else if (userPassword.value.length < 5) {
      setError("Incorrect Password");
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
        <div className="form-body-login">
          <form className="form-login" onSubmit={handleSubmit}>
            <div className="title">Login</div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <button className="login-button">Login</button>
              {error && (
                <h5 style={{ color: "red", fontFamily: "system-ui" }}>
                  {error}
                </h5>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
