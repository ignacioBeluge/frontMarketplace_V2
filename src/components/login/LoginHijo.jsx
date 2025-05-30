
const LoginHijo = ({
    email, 
    password, 
    onEmailChange, 
    onPasswordChange, 
    onSubmit, 
    error}) => {
        return (
            <form onSubmit={onSubmit}>
                <input
                type = "email"
                value = {email}
                onChange = {onEmailChange}
                placeholder = "Email"
                />
                <input
                type = "password"
                value = {password}
                onChange = {onPasswordChange}
                placeholder = "Contrasena"
                />
                <button type = "submit"> Login</button>
                <p> {error}</p>
            </form>
        )
}

export default LoginHijo