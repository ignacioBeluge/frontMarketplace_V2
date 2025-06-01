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
import { useState } from 'react';


//uso useNavigate cuando quiera navegar a otras rutas en respuestas a eventos
// useLocation devuelve la info de la url en la que estoy parado, hacer acciones sobre la ruta actual

const App = () => {

  const [token, setToken] = useState (null);
  const navigate = useNavigate();

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
      <Route path="/login" element={<LoginView  onLoginSuccess={setToken}/>} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/cart" element={<CartView token={token} />}/> 
    </Routes>
    </>
  );
};

export default App
