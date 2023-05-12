import './styles.scss'
import React, { useEffect, useState } from 'react'
import InputSearch from '../Search/imputSearch.jsx'
import HomeButton from '../HomeButton/HomeButton.jsx'
import { useNavigate } from 'react-router-dom'
import categoriesClassification from '../../../categoriesClassification.json'
import Title from './Title.jsx'

export const Navbar = () => {
  const [userIsLogged, setUserIsLogged] = useState(false)
  const [categories, setCategories] = useState(null)
  const [inputValue, setInputValue] = useState(' ')
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('token')
    setUserIsLogged(false)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUserIsLogged(true)
    }
  }, [])

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
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="login-register-button"
                onClick={() => navigate('/register')}
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
      <nav className="container-fluid">
        <div className="row justify-content-between navbar">
          <nav className="container d-flex flex-row  justify-content-center align-items-center inline ">
            <nav className="container d-flex flex-row  justify-content-center align-items-center inline">
              <div
                className="m-2 "
                onMouseEnter={() => setShowModal(true)}
                onMouseLeave={() => setShowModal(false)}
              >
                {categoriesClassification.map((category) => (
                  <Title categories={Object.keys(category)}></Title>
                ))}
              </div>
            </nav>
          </nav>
        </div>
      </nav>
    </div>
    /* {showModal && (
      <Modal subcategorias={Object.values(categories)}/> 
      )} */
  )
}

export default Navbar
