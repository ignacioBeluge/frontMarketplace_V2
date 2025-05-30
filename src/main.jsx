import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './views/App.jsx'
import { BrowserRouter } from 'react-router-dom';
// main renderiza app 
// main es el encargado de mostrar la app en el navegador

createRoot(document.getElementById('root')).render(
  // hace una copia del index.html no toca el dom original
  // crea un virtual dom
  // document.getElementById esta mal hacerlo 
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
