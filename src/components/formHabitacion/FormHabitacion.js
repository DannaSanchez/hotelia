import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom'

import { ContainerForm, GrupoInput, GrupoCheckbox } from '../../elements/formStyle/FormStyle';

import './FormHabitacion.css';
//
import IconoNevera from '../../img/bxs-fridge.svg';

//import Swal from 'sweetalert2';
//import {Link} from 'react-router-dom'

function FormHabitacion() {

    const url = "https://app-hotelia3.herokuapp.com/habitaciones";

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    //Previsualización de imagen
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected)
        } else {
            setError(true);
        }
    };


    return (

        <section className='room-registration-form'>

            <Formik
                initialValues={{
                    nombrehab: '',
                    _id: '',
                    valornoche: '',
                    camas: '',
                    capacidad: '',
                    descripcion: '',
                    estado: 'Disponible',
                    img:'',
                    cajafuerte:'',
                    nevera:'',
                    banio:'',
                    wifi:'',
                    tv:''
                }}

                validate={(valores) => {
                    let errores = {};

                    //Validación nombre
                    if (!valores.nombrehab) {
                        errores.nombrehab = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombrehab)) {
                        errores.nombrehab = 'Nombre no válido'
                    }

                    //Validación número habitación
                    if (!valores._id) {
                        errores._id = 'Por favor ingresa un número'
                    } else if (!/^[0-9]{3,3}$/.test(valores._id)) {
                        errores._id = 'El número corresponde a 3 dígitos'
                    }

                    //Validación cantidad camas
                    if (!valores.camas) {
                        errores.camas = 'Por favor ingresa una cantidad'
                    } else if (!/^[0-9]{1,2}$/.test(valores.camas)) {
                        errores.camas = 'Máximo 10 camas'
                    }

                    //Validación cantidad huespedes
                    if (!valores.capacidad) {
                        errores.capacidad = 'Por favor ingresa una cantidad'
                    } else if (!/^[0-9]{1,2}$/.test(valores.capacidad)) {
                        errores.capacidad = 'Máximo 20 huéspedes'
                    }

                    //Validación valor de la reserva
                    if (!valores.valornoche) {
                        errores.valornoche = 'Por favor ingresa un número'
                    } else if (!/^[0-9]{5,12}$/.test(valores.valornoche)) {
                        errores.valornoche = 'Min 5 dígitos, máx 12 dígitos'
                    }

                    //Validación descripción
                    if (!valores.descripcion) {
                        errores.descripcion = 'Por favor ingresa una descripción'
                    } else if (!/^[^$%&|<>#]{1,500}$/.test(valores.descripcion)) {
                        errores.descripcion = 'Descripción demasiado extensa'
                    }

                     //Validación imagen
                     if(!valores.img){
                        errores.img = 'Por favor añade una imagen'
                    }   

                    return errores;
                }}

                onSubmit={async (valores, { resetForm }) => {
                    resetForm();
                    console.log(valores);
                    const response = await axios.post(url, valores);//await espera hasta que se ejecute la petición
                    console.log(response);
                    console.log('Formulario enviado');
                }}
            >

                {({ errors}) => (

                    <ContainerForm>
                        <h1 className='room-registration-form__title'>Registro de nueva habitación</h1>

                        <Form className='modify-room__form-register'>

                            <section className='modify-room__information-basic room-form-register'>

                                <div className='modify-room__image-principal image__form'>
                                    <div className="App">
                                        <div className="container-img">
                                            
                                             <div>
                                                <label htmlFor='img' className='modify-room__icon'><i class="fa-solid fa-pen"></i></label>
                                                <Field 
                                                    type='file' 
                                                    id='img' 
                                                    name='img' 

                                                    className="login__input"
                                                />

                                            </div>
                                            <ErrorMessage name='file' component={() => (<div className='login__error'>{errors.img}</div>)}/> 
                                        </div>
                                    </div>
                                </div>

                                <div className='modify-room__form'>
                                    <div className='modify-room__form-section-primary'>
                                        <GrupoInput>
                                            <label htmlFor="nombrehab" className='login__label'>Nombre de la habitación</label>
                                            <Field
                                                type='text'
                                                id='nombrehab'
                                                name='nombrehab'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='nombrehab' component={() => (<div className='login__error'>{errors.nombrehab}</div>)} />
                                        </GrupoInput>

                                        <GrupoInput>
                                            <label htmlFor="_id" className='login__label'>Número de habitación</label>
                                            <Field
                                                type='number'
                                                id='_id'
                                                name='_id'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='_id' component={() => (<div className='login__error'>{errors._id}</div>)} />
                                        </GrupoInput>
                                    </div>

                                    <div className='modify-room__form-section-secondary'>
                                        <div className='modify-room__form-section-secondary__primary'>

                                            <GrupoInput className='form-section-secondary__primary'>
                                                <label htmlFor="camas" className='login__label'>N° camas</label>
                                                <div className='modify-room__input'>
                                                    <i class="fa-solid fa-minus"></i>
                                                    <Field
                                                        type='number'
                                                        id='camas'
                                                        name='camas'
                                                        max='10'
                                                        min='1'

                                                        className="login__input"
                                                    />
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                                <ErrorMessage name='camas' component={() => (<div className='login__error'>{errors.camas}</div>)} />
                                            </GrupoInput>

                                            <GrupoInput className='form-section-secondary__primary'>
                                                <label htmlFor="capacidad" className='login__label'>N° huéspedes</label>
                                                <div className='modify-room__input'>
                                                    <i class="fa-solid fa-minus"></i>
                                                    <Field
                                                        type='number'
                                                        id='capacidad'
                                                        name='capacidad'
                                                        max='20'
                                                        min='1'

                                                        className="login__input"
                                                    />
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                                <ErrorMessage name='capacidad' component={() => (<div className='login__error'>{errors.capacidad}</div>)} />
                                            </GrupoInput>

                                        </div>

                                        <GrupoInput>
                                            <label htmlFor="valornoche" className='login__label'>Valor de la reserva</label>
                                            <Field
                                                type='number'
                                                id='valornoche'
                                                name='valornoche'

                                                className="login__input"
                                            />

                                            <ErrorMessage name='valornoche' component={() => (<div className='login__error'>{errors.valornoche}</div>)} />
                                        </GrupoInput>
                                    </div>

                                    <GrupoInput>
                                        <label htmlFor="descripcion" className='login__label'>Descripción de la habitación</label>
                                        <Field
                                            as='textarea'
                                            rows='2'
                                            id='descripcion'
                                            name='descripcion'

                                            className="login__textarea"
                                        />

                                        <ErrorMessage name='descripcion' component={() => (<div className='login__error'>{errors.descripcion}</div>)} />
                                    </GrupoInput>
                                </div>


                            </section>


                            <div className='modify-room__additional-information room-form-register'>
                                <h3 className='modify-room__subtitle'>Servicios adicionales (opcionales)</h3>
                                <div className='modify-room__additional-services'>

                                    <GrupoCheckbox className='additional-services__checkbox'>
                                        <Field 
                                            type='checkbox' 
                                            name='cajafuerte'
                                            id='cajafuerte'
                                            />
                                        <div className='additional-services_checkbox_icon'>
                                            <i class="fa-solid fa-vault"></i>
                                        </div>
                                        <p>Caja fuerte</p>
                                    </GrupoCheckbox>

                                    <GrupoCheckbox className='additional-services__checkbox'>
                                        <Field 
                                            type='checkbox'
                                            name='tv'
                                            id='tv'
                                        />
                                        <div className='additional-services_checkbox_icon'>
                                            <i class="fa-solid fa-tv"></i>
                                        </div>
                                        <p>Televisión</p>
                                    </GrupoCheckbox>

                                    <GrupoCheckbox className='additional-services__checkbox'>
                                        <Field 
                                            type='checkbox'
                                            name='wifi'
                                            id='wifi' 
                                        />
                                        <div className='additional-services_checkbox_icon'>
                                            <i class="fa-solid fa-wifi"></i>
                                        </div>
                                        <p>Wifi</p>
                                    </GrupoCheckbox>

                                    <GrupoCheckbox className='additional-services__checkbox'>
                                        <Field 
                                            type='checkbox' 
                                            name='banio'
                                            id='banio'
                                        />
                                        <div className='additional-services_checkbox_icon'>
                                            <i class="fa-solid fa-toilet"></i>
                                        </div>
                                        <p>Baño</p>
                                    </GrupoCheckbox>

                                    <GrupoCheckbox className='icon-fridge'>
                                        <Field 
                                            type='checkbox' 
                                            name='nevera'
                                            id='nevera'
                                        />
                                        <div className='additional-services_checkbox_icon'>
                                            <img src={IconoNevera} alt="Icono de nevera" />
                                        </div>
                                        <p>Nevera</p>
                                    </GrupoCheckbox>


                                </div>
                            </div>

                            {/*<Boton link="/listado-habitaciones-admin" description="Registrar" */}

                            <div className='modify-room__buttons modify-room__buttons__register'>
                                <Link to="/listado-habitaciones-admin" ><Button variant="primary" className='modify-room__ButtonPrincipal'>Cancelar</Button></Link>
                                <Button type="submit" variant="secondary" className='modify-room__ButtonSecondary'>Registrar</Button>
                            </div>

                            {/*<Button type="submit" className='login__button'>Registrar</Button>*/}

                            {formularioEnviado}


                        </Form>

                    </ContainerForm>

                )}

            </Formik>


        </section>
    );

}

export default FormHabitacion;