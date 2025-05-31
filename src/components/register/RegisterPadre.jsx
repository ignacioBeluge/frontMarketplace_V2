import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterHijo from "./RegisterHijo";

const RegisterPadre = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [error, setError] = useState("");
    const [role, setRole] = useState("USER")

    const navigate = useNavigate();
    const URL = "http://localhost:8080/api/v1/auth/register"

    const handleRegister = async (e) => {
        e.preventDefault();
    try{
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstname: nombre,
                lastname: apellido,
                email,
                password,
                role
            })
        })

        if (!response.ok) {
            throw new Error("Error al registrar usuario")
        }

        alert("Usuario registrado")
        navigate("/login")
    } catch (err) {
        setError("No se pudo registrar");
        console.error(err);
    }
}

return (
    <RegisterHijo
    nombre = {nombre}
    apellido={apellido}
    email={email}
    password={password}
    role={role}
    onNombreChange={(e) => setNombre(e.target.value)}
    onApellidoChange={(e) => setApellido(e.target.value)}
    onEmailChange={(e) => setEmail(e.target.value)}
    onPasswordChange={(e) => setPassword(e.target.value)}
    onRoleChange={(e) => setRole(e.target.value)}
    onSubmit={handleRegister}
    error={error}
    />
)
};



export default RegisterPadre