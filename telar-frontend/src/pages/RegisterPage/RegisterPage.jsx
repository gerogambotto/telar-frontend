import React, { useState } from "react"
import { Layout } from "../../components/Layout/Layout.jsx"
import "./styles.scss"
import { authGlobalState } from "../../context/authcontext/AuthContext.jsx"

export function RegisterPage() {
  const { register } = authGlobalState()
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleChange = (event) => {
    const { name, value } = event.target

    const newValues = {
      ...values,
      [name]: value,
    }
    if(validateField(name,value)){
      setValues(newValues)
    }
  }

  const validateField = (name, value) => {
    function isValidEmail(userMail) {
      return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(userMail)
    }

    if (name === 'email' && !isValidEmail(value)) {
      setError("Incorrect e-mail")
    } else if (name === 'password' && value.length < 5) {
      setError("Incorrect password")
    /* } else if (name === 'confirmPassword' && value !== 'password') {
      setError("Passwords don t match") */
    } else setError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      register(values)
    } catch (error) {
      console.error('Error de registro', error)
      
    }
  }

  return (
    <Layout>
      <section className="register-section">
        <div className="form-body-register">
          <form className="form-register" onSubmit={handleSubmit}>
            <div className="title">Registration</div>

            <div className="input__box">
              <input
                name="email"
                values={values.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="input__box">
              <input
                name="password"
                placeholder="Password"
                values={values.password}
                onChange={handleChange}
              />
            </div>

            <div className="input__box">
              <input
                name="confirmPassword"
                placeholder="Confirm Password"
                values={values.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <button disabled={error} className="register-button">Register</button>

              {error && <h5 style={{ color: "red" }}>{error}</h5>}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
