import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register/register.jsx";
import { Login } from "./pages/login/login.jsx";
import { Home } from "./pages/home/home.jsx";
import { ProductDetail } from "./pages/product/productDetail.jsx";
import Productcategory  from "./pages/category/productcategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product/category/:category" element={<Productcategory />} />
    </Routes>
  );
}

export default App;
