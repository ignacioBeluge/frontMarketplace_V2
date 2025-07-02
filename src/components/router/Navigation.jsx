import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";

const Navigation = ({ onLogout }) => {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <button className="nav-button" >🏠 Home</button>
          </Link>
        </li>

        {!token && (
          <>
            <li>
              <Link to="/login">
                <button className="nav-button" >Iniciar sesión</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="nav-button" >Registrarse</button>
              </Link>
            </li>
          </>
        )}

        {token && (
          <>
            {role === "USER" && (
              <>
                <li>
                  <Link to="/cart">
                    <button className="nav-button" >🛒 Carrito</button>
                  </Link>
                </li>
                <li>
                  <Link to="/orders">
                    <button className="nav-button" >Mis Órdenes</button>
                  </Link>
                </li>
              </>
            )}

            {role === "ADMIN" && (
              <li>
                <Link to="/admin">
                  <button className="nav-button">🔧 Panel Admin</button>
                </Link>
              </li>
            )}

            <li>
              <button onClick={onLogout} className="nav-button" >Cerrar sesión</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
