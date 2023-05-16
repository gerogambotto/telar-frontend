import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

export const authContext = createContext()
export const authGlobalState = () => {
  const context = useContext(authContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (email, password) => {
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "atuny0",
        password: "9uQFF1Lh",
      }),
    })
      .then((res) => res.json())
      .then(console.log)
    console.log("logged")
  }
  const register = async (email, password, rePassword) => {
    await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        re_password: rePassword,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      console.log('registered')
      
  }
  const logout = () => {}

  return (
    <authContext.Provider
      value={{
        login,
        register,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
