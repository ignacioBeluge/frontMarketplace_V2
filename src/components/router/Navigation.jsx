import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ onLogout }) => {
  const { token, role } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <button>🏠 Home</button>
          </Link>
        </li>

        {!token && (
          <>
            <li>
              <Link to="/login">
                <button>Iniciar sesión</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button>Registrarse</button>
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
                    <button>🛒 Carrito</button>
                  </Link>
                </li>
                <li>
                  <Link to="/orders">
                    <button>Mis Órdenes</button>
                  </Link>
                </li>
              </>
            )}

            {role === "ADMIN" && (
              <li>
                <Link to="/admin">
                  <button>🔧 Panel Admin</button>
                </Link>
              </li>
            )}

            <li>
              <button onClick={onLogout}>Cerrar sesión</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
