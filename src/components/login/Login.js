import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios';
import Swal from 'sweetalert2';
import Logo2 from '../../img/Hotelia horizontal negro.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login (){
    //url de huesped
    const url = "https://app-hotelia3.herokuapp.com/users/1254784102";
    //url de huesped
    const url2 = "https://app-hotelia3.herokuapp.com/users/50247841"; 
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };
    const getData2 = async () => {
        const response2 = axios.get(url2);
        return response2;
    };
    const [list, setList] = useState([]);
    const [upList, setUplist] = useState([false]);
    const [list2, setList2] = useState([]);
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    useEffect(() => {
        getData2().then((response2) => {
            setList2(response2.data);
        })
    },[upList])
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return(
        <>
            <section className='login'>

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validate={(valores) =>{
                    let errores = {};
                    //Validación email
                    if(!valores.email){
                        errores.email = 'Ingrese su usuario'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = 'Correo electrónico no válido'
                    }
                    //Validación contraseña
                    if(!valores.password){
                        errores.password = 'Ingrese su contraseña'
                     } else if(! /^.{4,18}$/.test(valores.password)){
                         errores.password = 'La contraseña debe tener de 4 a 18 dígitos'
                     }
                    return errores;
                }}
    
                onSubmit={(valores, {resetForm}) => {
                        if((valores.email===list.email && valores.password===list.password) || (valores.email==="cambio@gmail.com" && valores.password==="cambio123")){
                            resetForm();
                            console.log('Formulario enviado');
                            cambiarFormularioEnviado(true);
                            setTimeout(() => window.location.href="/habitaciones-huesped", 50);
                            setUplist(!upList);
                        }
                    else if(valores.email=list2.email && valores.password===list2.password){
                            resetForm();
                            console.log('Formulario enviado');
                            cambiarFormularioEnviado(true);
                            setTimeout(() => window.location.href="/listado-habitaciones-admin", 50);
                            setUplist(!upList);
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Usuario no registrado',
                            confirmButtonColor: "#9C2759",
                            background: '#FFFDFB',
                            color: '#000'
                        })
                        console.log('Usuario no registrado');
                        resetForm();
                    }
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
                        <label className='login__label'>Usuario</label>
                        <Field 
                            type='text' 
                            id='email' 
                            name='email' 
                            className="login__input"
                        />
                        <ErrorMessage name='email' component={() => (<div className='login__error'>{errors.email}</div>)}/>
                    </div>
                    <div className='login__form-group'>
                        <label className='login__label'>Contraseña</label>
                        <Field 
                            type='password'
                            id='password' 
                            name='password' 
                            className="login__input"
                        />
                        <ErrorMessage name='password' component={() => (<div className='login__error'>{errors.password}</div>)}/>

                    </div>

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