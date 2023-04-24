import './App.scss'
import {Route, Routes} from 'react-router-dom'
import {Register} from './pages/register/register.jsx'
import {Login} from './pages/login/login.jsx'
import {Home} from './pages/home/home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App
