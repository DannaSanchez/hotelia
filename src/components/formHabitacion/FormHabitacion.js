import './FormHabitacion.css';
import {ContainerForm, Label, GrupoInput, GrupoCheckbox, Input, Textarea} from '../../elements/formStyle/FormStyle';
import IconoImagen from '../../img/habitaciones/icono-imagen.webp';
import Boton from '../../components/boton/Boton';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'

function FormHabitacion(){ 

    return( 
        <section className='room-registration-form'>
            <ContainerForm>
                <h1 className='room-registration-form__title'>Registro de nueva habitación</h1>
            

            <div className='modify-room__form'>
                    <div className='modify-room__form-section-primary'>
                        <GrupoInput>
                            <Label>Nombre habitación</Label>
                            <Input/>
                        </GrupoInput>
                        
                        <GrupoInput>
                            <Label>Número Habitación</Label>
                            <Input/>
                        </GrupoInput>
                    </div>

                    <div className='modify-room__form-section-secondary'>
                        <div className='modify-room__form-section-secondary__primary'>
                        <GrupoInput className='form-section-secondary__primary'>
                            <Label>N° camas</Label>
                            <div className='modify-room__input'>
                                <i class="fa-solid fa-minus"></i>
                                <Input/>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </GrupoInput>
                        
                        <GrupoInput className='form-section-secondary__primary'>
                            <Label>N° Huéspedes</Label>
                            <div className='modify-room__input'>
                                <i class="fa-solid fa-minus"></i>
                                <Input/>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </GrupoInput>
                        </div>
                        
                        <GrupoInput>
                            <Label>Valor reserva</Label>
                            <Input/>
                        </GrupoInput>
                    </div>

                    <GrupoInput>
                        <Label>Descripción</Label>
                        <Textarea/>
                    </GrupoInput>
                </div>
                
                <div className='modify-room__additional-information'>

                    <h3 className='modify-room__subtitle'>Galería</h3>

                    <div className='modify-room__galery'>

                        <div className='modify-room__image'>
                            <img src={IconoImagen} alt='habitación doble'/>
                                <div className='modify-room__icon'>
                                <i class="fa-solid fa-pen"></i>
                                </div>
                        </div>

                        <div className='modify-room__image'>
                            <img src={IconoImagen} alt='habitación doble'/>
                            <div className='modify-room__icon'>
                                <i class="fa-solid fa-pen"></i>
                            </div>
                        </div>

                        <div className='modify-room__image image-new'>
                            <img src={IconoImagen} alt='habitación doble'/>
                            <div className='modify-room__icon'>
                                <p>Añadir otra imagen</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='modify-room__additional-information'>
                    <h3 className='modify-room__subtitle'>Servicios adicionales (opcionales)</h3>
                    <div className='modify-room__additional-services'>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-vault"></i>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-tv"></i>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-wifi"></i>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-snowflake"></i>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-dumbbell"></i>
                        </GrupoCheckbox>

                        <GrupoCheckbox>
                            <input type='checkbox'/>
                            <i class="fa-solid fa-bell-concierge"></i>
                        </GrupoCheckbox>
                    </div>
                </div>

                <Boton link="/listado-habitaciones-admin" description="Registrar" />

            </ContainerForm>
        </section>
    );
}

export default FormHabitacion;