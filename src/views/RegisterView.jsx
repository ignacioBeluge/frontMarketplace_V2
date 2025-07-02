import RegisterPadre from '../components/register/RegisterPadre'
import "./RegisterView.css"; 

const RegisterView = () => {
    return (
        <div className="register-view-container"> 
            <h1 className="register-title">Regístrate en G3STORE</h1> 
            <RegisterPadre /> 
        </div>
    )
}

export default RegisterView;