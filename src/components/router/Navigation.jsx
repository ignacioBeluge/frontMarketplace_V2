import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useEffec, useEffect, useState } from "react"

// linkear componentes con rutas
// actualiza vista sin recargar pagina

const Navigation = ({token, onLogout}) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        if(token) {
            try {
                const decoded = jwtDecode(token);
                const role = decoded.role?.replace("ROLE_", "")
                setRole(role);
            }catch(err){
                console.error(err);
                setRole(null);
            }
        }else {
            setRole(null);
        }
    }, [token]);


    return (
    <nav>
        <ul>
            <li>
                <Link to="/">
                    <button>Home</button>
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
                <li>
                    <Link to="/cart">🛒 Carrito </Link>
                </li>

                <li>
                    <button onClick={onLogout}>Cerrar sesion </button>
                </li>
                
                {role === "ADMIN" && (
                    <li>
                        <Link to="/admin">
                        <button>Admin Panel </button>
                        </Link>
                    </li>
                )}
                </>
            )}
        </ul>
    </nav>
    )
}

export default Navigation