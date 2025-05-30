import LoginPadre from "../components/login/LoginPadre"

const LoginView = ({onLoginSuccess}) => {
    return (
        <div >
            <h1> Pantalla de login </h1>
            <LoginPadre onLoginSuccess={onLoginSuccess} />
        </div>
    )
}

export default LoginView