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
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token')
    setUserIsLogged(false)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('token')) {
      setUserIsLogged(true)
    }
  }, [])

  return (
    <div>
      <div className='container-fluid'>
        <div className='row justify-content-between navbar'>
          <HomeButton />
          <InputSearch value={inputValue} setInputValue={setInputValue} />
          {!userIsLogged ? (
            <div className='loginregister'>
              <button
                className='login-register-button'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className='login-register-button'
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </div>
          ) : (
            <div className='loginregister'>
              <button className='login-register-button' onClick={logOut}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
      <nav className='container-fluid'>
        <div className=''>
          <div
            className='d-flex justify-content-center align-items-center'
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            {categoriesClassification.map((category) => (
              <Title categories={Object.keys(category)}></Title>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
