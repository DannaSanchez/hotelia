import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Logo2 from '../../img/Hotelia horizontal negro.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login (){

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    //const [shown, setShown] = React.useState(false);

    //const switchShown = () => setShown(!shown);

    //const [password, setPassword] = React.useState('');
    //const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

    return(
        <>
            <section className='login'>

            <Formik
                initialValues={{
                    correo: '',
                    password: ''
                }}

                validate={(valores) =>{
                    let errores = {};
    
                    //Validación contraseña
                    if(!valores.password){
                        errores.password = 'Ingrese su contraseña'
                     } else if(! /^.{4,18}$/.test(valores.password)){
                         errores.password = 'La contraseña debe tener de 4 a 18 dígitos'
                     }
    
                    //Validación correo
                    if(!valores.correo){
                        errores.correo = 'Ingrese su usuario'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Correo electrónico no válido'
                    }
    
                    return errores;
                }}
    
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => window.location.href="/listado-habitaciones-admin", 50);
                }}
            >

            {( {errors} ) => (

                <Form className='login__form'>
                    <div className='login__logo'>
                        <Link to="/"><img src={Logo2} alt="Logo de Hotelia"/></Link>
                    </div>
                    <div className='login__user'>
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <div className='login__form-group'>
                        <label htmlFor="correo" className='login__label'>Usuario</label>
                        <Field 
                            type='text' 
                            id='correo' 
                            name='correo' 

                            className="login__input"
                        />

                        <ErrorMessage name='correo' component={() => (<div className='login__error'>{errors.correo}</div>)}/>

                    </div>

                    <div className='login__form-group'>
                        <label htmlFor="password" className='login__label'>Contraseña</label>
                        <Field 
                           
                            type='password'

                            id='password' 
                            name='password' 

                            className="login__input"

                            
                        />

                        {/*
                        
                        onChange={onChange}
                            type={shown ? 'text' : 'password'} 
                        value={password}

                        <button onClick={switchShown}>
                            {shown ? `Ocultar` : `Mostrar`}
                        </button>*/}

                        <ErrorMessage name='password' component={() => (<div className='login__error'>{errors.password}</div>)}/>

                    </div>
                    
                    {/*<Boton link="/listado-habitaciones-admin" buttonid="login__button" description="Ingresar"/>*/}

                    <button type='submit' className='login__button'>Enviar</button>

                    {formularioEnviado}

                    <Link to="/form/huesped" className='login__register'><span>¿No tienes una cuenta?</span> Regístrate aquí</Link>

                </Form>
                )}
            </Formik>

            </section>
        </>
    );
}
export default Login;