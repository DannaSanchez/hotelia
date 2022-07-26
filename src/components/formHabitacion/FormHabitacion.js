import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

import './FormHabitacion.css';
import {ContainerForm, GrupoInput, GrupoCheckbox} from '../../elements/formStyle/FormStyle';
import IconoImagen from '../../img/habitaciones/icono-imagen.webp';
import IconoNevera from '../../img/bxs-fridge.svg'
import Swal from 'sweetalert2';
//import {Link} from 'react-router-dom'

function FormHabitacion(){ 

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return( 
        
        <section className='room-registration-form'>

        <Formik
                initialValues={{
                    nombre: '',
                    numerohabitacion: '',
                    valorreserva: '',
                    camas: '', 
                    huespedes: '',
                    descripcion: '',
                    //file:''
                }}

                validate={(valores) =>{
                    let errores = {};
    
                    //Validación nombre
                    if(!valores.nombre){
                        errores.nombre = 'Por favor ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'Nombre no válido'
                    }

                    //Validación número habitación
                    if(!valores.numerohabitacion){
                        errores.numerohabitacion = 'Por favor ingresa un número'
                    } else if(!/^[0-9]{3,3}$/.test(valores.numerohabitacion)){
                        errores.numerohabitacion = 'El número corresponde a 3 dígitos'
                    }

                    //Validación cantidad camas
                    if(!valores.camas){
                        errores.camas = 'Por favor ingresa una cantidad'
                    } else if(!/^[0-9]{1,2}$/.test(valores.camas)){
                        errores.camas = 'Máximo 10 camas'
                    }

                    //Validación cantidad huespedes
                    if(!valores.huespedes){
                        errores.huespedes = 'Por favor ingresa una cantidad'
                    } else if(!/^[0-9]{1,2}$/.test(valores.huespedes)){
                        errores.huespedes = 'Máximo 20 huéspedes'
                    }

                    //Validación valor de la reserva
                    if(!valores.valorreserva){
                        errores.valorreserva = 'Por favor ingresa un número'
                    } else if(!/^[0-9]{5,12}$/.test(valores.valorreserva)){
                        errores.valorreserva = 'Min 5 dígitos, máx 12 dígitos'
                    }
                    
                    //Valdación descripción
                    if(!valores.descripcion){
                        errores.descripcion = 'Por favor ingresa una descripción'
                    } else if(!/^[^$%&|<>#]{1,500}$/.test(valores.descripcion)){
                        errores.descripcion = 'Descripción demasiado extensa'
                    }

                    /*Valdación imagen
                    if(!valores.file){
                        errores.file = 'Por favor añade una imagen'
                    } */

                    return errores;
                }}
    
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log('Formulario enviado');
                }}
            >

            {( {errors} ) => (

            <ContainerForm>
                <h1 className='room-registration-form__title'>Registro de nueva habitación</h1>
            

            <Form className='modify-room__form'>
                    <div className='modify-room__form-section-primary'>

                        <GrupoInput>
                            <label htmlFor="nombre" className='login__label'>Nombre de la habitación</label>
                            <Field 
                                type='text' 
                                id='nombre' 
                                name='nombre' 

                                className="login__input"
                            />

                            <ErrorMessage name='nombre' component={() => (<div className='login__error'>{errors.nombre}</div>)}/>
                        </GrupoInput>
                        
                        <GrupoInput>
                            <label htmlFor="numerohabitacion" className='login__label'>Número de habitación</label>
                            <Field 
                                type='number' 
                                id='numerohabitacion' 
                                name='numerohabitacion' 

                                className="login__input"
                            />

                            <ErrorMessage name='numerohabitacion' component={() => (<div className='login__error'>{errors.numerohabitacion}</div>)}/>
                        </GrupoInput>
                    </div>

                    <div className='modify-room__form-section-secondary'>
                        <div className='modify-room_form-section-secondary_primary'>
                        
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
                            <ErrorMessage name='camas' component={() => (<div className='login__error'>{errors.camas}</div>)}/>
                        </GrupoInput>
                        
                        <GrupoInput className='form-section-secondary__primary'>
                            <label htmlFor="huespedes" className='login__label'>N° huéspedes</label>
                                <div className='modify-room__input'>
                                    <i class="fa-solid fa-minus"></i>
                                    <Field 
                                        type='number' 
                                        id='huespedes' 
                                        name='huespedes' 
                                        max='20'
                                        min='1'

                                        className="login__input"
                                    />
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <ErrorMessage name='huespedes' component={() => (<div className='login__error'>{errors.huespedes}</div>)}/>
                        </GrupoInput>
                        </div>
                        
                        <GrupoInput>
                            <label htmlFor="valorreserva" className='login__label'>Valor de la reserva</label>
                            <Field 
                                type='number' 
                                id='valorreserva' 
                                name='valorreserva' 

                                className="login__input"
                            />

                            <ErrorMessage name='valorreserva' component={() => (<div className='login__error'>{errors.valorreserva}</div>)}/>
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

                            <ErrorMessage name='descripcion' component={() => (<div className='login__error'>{errors.descripcion}</div>)}/>
                    </GrupoInput>
                
                
                <div className='modify-room__additional-information'>

                    <h3 className='modify-room__subtitle'>Galería</h3>

                    <div className='modify-room__galery'>

                        <div className='modify-room__image'>
                            <img src={IconoImagen} alt='habitación doble'/>
                                <div>
                                    <label htmlFor='file' className='modify-room__icon'><i class="fa-solid fa-pen"></i></label>
                                    <Field 
                                        type='file' 
                                        id='file' 
                                        name='file' 

                                        className="login__input"
                                    />

                                </div>
                                <ErrorMessage name='file' component={() => (<div className='login__error'>{errors.file}</div>)}/>
                        </div>

                        <div className='modify-room__image'>
                            <img src={IconoImagen} alt='habitación doble'/>
                            <div>
                                <label htmlFor='file' className='modify-room__icon'><i class="fa-solid fa-pen"></i></label>
                                <Field 
                                    type='file' 
                                    id='file' 
                                    name='file' 

                                    className="login__input"
                                />

                            </div>
                            <ErrorMessage name='file' component={() => (<div className='login__error'>{errors.file}</div>)}/>
                        </div>

                        {/*<div className='modify-room__image image-new'>
                            <img src={IconoImagen} alt='habitación doble'/>
                            <div className='modify-room__icon'>
                                <p>Añadir otra imagen</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>*/}
 
                    </div>
                </div>

                <div className='modify-room__additional-information'>
                    <h3 className='modify-room__subtitle'>Servicios adicionales (opcionales)</h3>
                    <div className='modify-room__additional-services'>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-vault"></i>
                            </div>
                            <p>Caja fuerte</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-tv"></i>
                            </div>
                            <p>Televisión</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-wifi"></i>
                            </div>
                            <p>Wifi</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-snowflake"></i>
                            </div>
                            <p>Aire acondicionado</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-dumbbell"></i>
                            </div>
                            <p>Gimnasio</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-bell-concierge"></i>
                            </div>
                            <p>Servicio habitación</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='additional-services__checkbox'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <i class="fa-solid fa-toilet"></i> 
                            </div>
                            <p>Baño</p>
                        </GrupoCheckbox>

                        <GrupoCheckbox className='icon-fridge'>
                            <input type='checkbox'/>
                            <div className='additional-services_checkbox_icon'>
                                <img src={IconoNevera} alt="Icono de nevera"/>
                            </div>
                            <p>Nevera</p>
                        </GrupoCheckbox>

                        
                    </div>
                </div>

                {/*<Boton link="/listado-habitaciones-admin" description="Registrar" */}

                <button type='submit' className='login__button'>Registrar</button>

                {formularioEnviado}
                
                </Form>

            </ContainerForm>

            )}
        
        </Formik>

        </section>
    );
}

export default FormHabitacion;