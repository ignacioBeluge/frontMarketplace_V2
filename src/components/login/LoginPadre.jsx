import { useState } from "react";

import { useNavigate } from "react-router-dom";

import LoginHijo from "./LoginHijo";

const LoginPadre = ( {onLoginSuccess} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const URL = "http://localhost:8080/api/v1/auth/authenticate"

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login enviado");

        try {
            const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        .then((response) => response.json())
        .then((data) => {
            onLoginSuccess(data.access_token);
        })
        }catch (err) {
            setError("Error login");
            console.error(err);
        }
        navigate("/");
    }

    return (
        <LoginHijo 
        email = {email}
        password = {password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange = {(e) => setPassword(e.target.value)} 
        onSubmit={handleLogin} 
        error = {error}
        />
    )
}

export default LoginPadre