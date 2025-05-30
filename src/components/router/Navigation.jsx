import { Link } from "react-router-dom"
// linkear componentes con rutas
// actualiza vista sin recargar pagina




const Navigation = () => {
    return (
    <>
    <nav>
        <ul>
            <li>
                <Link to = '/'>Inicio</Link>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default Navigation