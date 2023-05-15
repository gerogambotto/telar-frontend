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

  const login = () => {}
  const register = (values) => {
    const { email, password } = values

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
