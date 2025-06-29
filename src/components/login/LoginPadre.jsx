import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import LoginHijo from "./LoginHijo";
import { useDispatch, useSelector } from "react-redux";
import { postAuth } from "../../redux/authSlice";

const LoginPadre = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token, role, error  } = useSelector((state) => state.auth)
    

    const handleLogin = async (e) => {
        e.preventDefault();
        const login = await dispatch(postAuth({ email, password }));

        if (postAuth.fulfilled.match(login)) {
            alert("Login exitoso");
            const tokenRecibido = login.payload.access_token;
            const rolRecibido = login.payload.role;
            navigate('/');
        }
        else{
            console.error(login.error);
            alert("Credenciales invalidas")
        }
    }

    return (
        <LoginHijo 
        email = {email}
        password = {password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange = {(e) => setPassword(e.target.value)} 
        onSubmit={handleLogin} 
        />
    )
}

export default LoginPadre