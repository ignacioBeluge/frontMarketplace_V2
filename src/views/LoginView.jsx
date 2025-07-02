import LoginPadre from "../components/login/LoginPadre"
import "./LoginView.css"; 

const LoginView = ({onLoginSuccess}) => {
    return (
        <div className="login-view-container"> {}
            <h1 className="login-title">Inicia Sesión en G3STORE</h1> {}
            <LoginPadre onLoginSuccess={onLoginSuccess} />
        </div>
    )
}

export default LoginView