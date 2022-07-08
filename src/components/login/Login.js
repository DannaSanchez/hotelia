import Logo2 from '../../img/Hotelia horizontal negro.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { GrupoInput as div, Input, Label } from '../../elements/formStyle/FormStyle';

import Boton from '../boton/Boton';

function Login (){
    return(
        <>
            <section className='login'>
                <form className='login__form'>
                    <div className='login__logo'>
                        <Link to="/"><img src={Logo2} alt="Logo de Hotelia"/></Link>
                    </div>
                    <div className='login__user'>
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div className='login__form-group'>
                        <Label>Usuario</Label>
                        <Input></Input>
                    </div>

                    <div className='login__form-group'>
                        <Label>Contraseña</Label>
                        <Input></Input>
                    </div>

                    
                    <Boton link="/listado-habitaciones-admin" buttonid="login__button" description="Ingresar"/>
                    <Link to="#" className='login__register'><span>¿No tienes una cuenta?</span> Regístrate aquí</Link>
                </form>
            </section>
        </>
    );
}
export default Login;