import { Link } from "react-router-dom"
// linkear componentes con rutas
// actualiza vista sin recargar pagina




const Navigation = () => {
    return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </li>

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
        </ul>
    </nav>
    </>
    )
}

export default Navigation