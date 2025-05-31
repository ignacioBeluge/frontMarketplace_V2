const RegisterHijo = ({
    nombre,
    apellido,
    email,
    password,
    onNombreChange,
    onApellidoChange,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    error
}) => {
    return (
    <form onSubmit={onSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <div>
        <label>Nombre: </label>
        <input type="text" value={nombre} onChange={onNombreChange} required />
        </div>

        <div>
        <label>Apellido: </label>
        <input type="text" value={apellido} onChange={onApellidoChange} required />
        </div>

        <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={onEmailChange} required />
        </div>

        <div>
        <label>Contraseña: </label>
        <input type="password" value={password} onChange={onPasswordChange} required />
        </div>
        
        <button type="submit">Registrarse</button>
        

    </form>
);
};

export default RegisterHijo;