
const LoginHijo = ({
    email, 
    password, 
    onEmailChange, 
    onPasswordChange, 
    onSubmit }) => {
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
            </form>
        )
}

export default LoginHijo