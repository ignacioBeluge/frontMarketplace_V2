import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';

// routes envuelva a todas las route
// route define rutas de la aplicacion y que componentes estan asociados a las rutas

import LoginView from './LoginView';
import HomeView from './HomeView';
import ProductListPorCat from '../components/Product/ProductListPorCat';
import RegisterView from './RegisterView';
import CartView from './CartView'
import Navigation from '../components/router/Navigation';
import AdminView from './AdminView'
import AdminManageProducts from '../components/adminManage/AdminManageProducts';
import CheckoutFuncional from '../components/checkout/CheckoutFuncional'
import UserOrdersFuncional from '../components/userOrders/UserOrdersFuncional';

import { useState } from 'react';


//uso useNavigate cuando quiera navegar a otras rutas en respuestas a eventos
// useLocation devuelve la info de la url en la que estoy parado, hacer acciones sobre la ruta actual

const App = () => {

  const [token, setToken] = useState (null);
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

    const handleLoginSuccess = (token, role) => {
    setToken(token);
    setRole(role)
    navigate("/"); // moverlo acá
  };

  const handleLogout = () => {
    setToken (null);
    navigate("/login");
  }

  return (
    <>
    <Navigation token = {token} onLogout={handleLogout} />
    <Routes>
      <Route path = '/' element = {<HomeView/>}/>
      <Route path="/products/:categoryId" element={<ProductListPorCat token={token} />} />
      <Route path="/login" element={<LoginView  onLoginSuccess={handleLoginSuccess}/>} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/cart" element={<CartView token={token} />}/>
      <Route path="/admin" element={<AdminView token={token} role={role} />} />
      <Route path="/admin/products/manage" element={<AdminManageProducts token={token} />} />
      <Route path="/checkout" element={<CheckoutFuncional token={token} />} />
      <Route path="/orders" element={<UserOrdersFuncional token={token} />} />
    </Routes>
    </>
  );
};

export default App
