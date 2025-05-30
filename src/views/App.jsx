import './App.css'
import { Routes, Route } from 'react-router-dom';

// routes envuelva a todas las route
// route define rutas de la aplicacion y que componentes estan asociados a las rutas

import LoginView from './LoginView';
import HomeView from './HomeView';
import ProductListPorCat from '../components/Product/ProductListPorCat';

//uso useNavigate cuando quiera navegar a otras rutas en respuestas a eventos
// useLocation devuelve la info de la url en la que estoy parado, hacer acciones sobre la ruta actual

const App = () => {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<HomeView/>}/>
      <Route path="/products/:categoryId" element={<ProductListPorCat />} />
      <Route path="/login" element={<LoginView />} />
    </Routes>
    </>
  );
};

export default App
