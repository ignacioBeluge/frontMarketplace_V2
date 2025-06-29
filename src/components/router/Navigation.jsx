import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useEffec, useEffect, useState } from "react"
import { useSelector } from "react-redux"


// linkear componentes con rutas

// actualiza vista sin recargar pagina

const Navigation = () => {
    const { token, role } = useSelector((state) => state.auth)

    return (
    <nav>
        {token ? (
            <p> Logueado as {role} </p>
        ) : (
            <p> No estas logeado </p>
        )}

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
                {role === "USER" && (
                    <>
                        <li>
                            <Link to="/cart">🛒 Carrito </Link>
                        </li>

                        <li>
                            <Link to="/orders"> Mis Órdenes </Link>
                        </li>
                    </>
                )}

                {role === "ADMIN" && (
                    <li>
                        <Link to="/admin">
                        <button>Admin Panel </button>
                        </Link>
                    </li>
                )}
                </>
            )}


    </nav>
    )
}

export default Navigation