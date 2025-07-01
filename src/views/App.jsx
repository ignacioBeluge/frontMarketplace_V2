import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

// routes envuelva a todas las route
// route define rutas de la aplicacion y que componentes estan asociados a las rutas

import LoginView from "./LoginView";
import HomeView from "./HomeView";
import ProductListPorCat from "../components/Product/ProductListPorCat";
import RegisterView from "./RegisterView";
import CartView from "./CartView";
import Navigation from "../components/router/Navigation";
import AdminView from "./AdminView";
import AdminManageProducts from "../components/adminManage/AdminManageProducts";
import CheckoutFuncional from "../components/checkout/CheckoutFuncional";
import UserOrdersFuncional from "../components/userOrders/UserOrdersFuncional";
import AdminManageOrders from "../components/adminOrders/adminManageOrders";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

//uso useNavigate cuando quiera navegar a otras rutas en respuestas a eventos
// useLocation devuelve la info de la url en la que estoy parado, hacer acciones sobre la ruta actual

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSuccess = () => {
    navigate("/"); // moverlo acá
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Navigation onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products/:categoryId" element={<ProductListPorCat />} />
        <Route
          path="/login"
          element={<LoginView onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route
          path="/admin/products/manage"
          element={<AdminManageProducts />}
        />
        <Route path="/checkout" element={<CheckoutFuncional />} />
        <Route path="/orders" element={<UserOrdersFuncional />} />
        <Route path="/admin/orders/manage" element={<AdminManageOrders />} />
      </Routes>
    </>
  );
};

export default App;
