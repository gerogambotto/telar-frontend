import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProductDetail } from "./pages/Product/ProductDetail.jsx";
import ProductsCategory  from "./pages/Category/ProductCategory.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/products/category/:category"
        element={<ProductsCategory />}
      />
    </Routes>
  );
}

export default App;
