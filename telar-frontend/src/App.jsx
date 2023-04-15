import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Register} from './pages/register/register.jsx'
import {Login} from './pages/login/login.jsx'
import {Home} from './pages/home/home.jsx'

function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />}/>
    </Routes>
  );
}

export default App
