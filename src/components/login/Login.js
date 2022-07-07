import Logo2 from '../../img/logo2.png';
import './Login.css';

import Boton from '../boton/Boton';

function Login (){
    return(
        <>
            <section className='login'>
                <form className='login__form'>
                    <div className='login__logo'>
                        <img src={Logo2} alt="Logo de Hotelia"/>
                    </div>
                    <div className='login__user'>
                        <i class="fa-solid fa-user"></i>
                    </div>

                    

                    <Boton buttonid="login__button" description="Ingresar" />
                </form>
            </section>
        </>
    );
}
export default Login;