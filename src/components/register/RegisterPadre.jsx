import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterHijo from "./RegisterHijo";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/registerSlice";

const RegisterPadre = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [role, setRole] = useState("USER");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      firstname: nombre,
      lastname: apellido,
      email,
      password,
      role,
    };

    const result = await dispatch(registerUser(user));

    if (registerUser.fulfilled.match(result)) {
      alert("Usuario registrado");
      navigate("/login");
    }
  };

  return (
    <RegisterHijo
      nombre={nombre}
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
      loading={loading}
    />
  );
};

export default RegisterPadre;
