import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register/register.jsx";
import { Login } from "./pages/login/login.jsx";
import { Home } from "./pages/home/home.jsx";
import { Product } from "./pages/product/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
  );
}

export default App;
