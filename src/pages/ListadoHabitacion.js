import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ModalFooter, Form, ModalTitle, ModalBody, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, ErrorMessage } from 'formik'
import { Navigate } from "react-router-dom";

//import Cards from "../components/card/Card";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";
//import ImageSlider from "../components/newcard/ImageSlider";
//import ListCardAdmin from "../components/listadoAdmin/ListCardAdmin";
import CardAdmin from '../components/listadoAdmin/CardAdmin';
import IconoNevera from '../img/bxs-fridge.svg';
import LogoHotelia from '../img/Hotelia horizontal negro.png'

function ListadoHabitacion ( {user, dataUser, room, dataRoom, reservas, habitaciones}){

            const [data, setData] = useState({ fentrada: "", fsalida: "", cantidadNoches: "", totalreserva: "", userId: "", habitacionId:"" });

            const handleChangeA = ({ target }) => {
                setData({
                    ...data,
                    [target.name]: target.value
                })
            }
        
            const urlreserva = "https://app-hotelia3.herokuapp.com/reservas";

            const handleSubmitA = async (e) => {
                e.preventDefault(); 
                console.log(data);
                const response = await axios.post(urlreserva, data);
                console.log(response);
                if (response.status === 201) {
                    Swal.fire(
                        `Tu Reserva: <strong>
                        </strong>
                        ha sido registrada exitosamente!`,
                        'success'
                    )
                    Navigate.push("/");
                } else {
                    Swal.fire(
                        'Error!',
                        `Hubo un problema al registrar tu reserva!`,
                        'error'
                    )
                }
            }

            const disableDate = new Date().toISOString().slice(0, 10);

            const cantidadNoches = () => {
                var fechaE = new Date(document.getElementById('fentrada').value);
                var fechaS = new Date(document.getElementById('fsalida').value);
                /*console.log('fecha entrada', fechaE);
                console.log('fecha salida', fechaS);*/
                var time = fechaS.getTime() - fechaE.getTime();
                //console.log(fechaE);
                var days = Math.floor(time / (1000 * 60 * 60 * 24));
                document.getElementById("cantidadNoches").value = days;
                var valorTotal = days * habitaciones.valornoche;
                document.getElementById("totalreserva").value = valorTotal;
                data.cantidadNoches = days;
                console.log(data.cantidadNoches);
                data.totalreserva = valorTotal;
                console.log(data.totalreserva);
            }

                /* 1. Definir url del API a la que me voy a conectar */
                const url = "https://app-hotelia3.herokuapp.com/habitaciones";
                
                /*2.Generar fución asincrona*/
                const getData = async () => {
                    const response = axios.get(url);
                    return response;
                }
                
                /*3. UseState para guardar la respuesta de la petición*/
                const [list, setList] = useState([]);
                
                /*5.Crear otro estado para refrescar el listado despues de eliminar*/
                const [upList, setUplist] = useState([false]);
                
                /* Agregar una constante para actualizar el estado del modal */
                const [show, setShow] = useState(false);
                const handleClose = () => { setShow(false); }
                const handleOpen = () => { setShow(true); }

                /* Estado para obtener los datos del registro que se va a editar */
                const [dataModal, setDataModal] = useState({});

                const handleChangeModal = ({ target }) => {
                    setDataModal({
                        ...dataModal,
                        [target.name]: target.value
                    }) 
                }

                const handleSubmit=async(e)=>{
                    e.preventDefault();
                    dataModal.img = dataModal.img.replace("C:\\fakepath\\","/public/");
                    const response=await axios.put(`${url}/${dataModal._id}`,dataModal,{headers: {'Content-Type':'multipart/form-data'}});
                    console.log(response);  
                    if(response.status===200){
                        Swal.fire({  
                            title: '¡Cambio guardado!',
                            html: `<p>La habitación <strong> ${dataModal.nombrehab} </strong> ha sido actualizada exitosamente! </p>`,
                            confirmButtonColor: "#333333",
                            background: '#FFFDFB',
                            color: '#000',
                            imageUrl: 'https://i.postimg.cc/85KV3zTq/Hotelia-horizontal-negro.png',
                            imageWidth: 250,
                            icon: 'success',
                            showCloseButton: true
                        })
                        handleClose();
                        setUplist(!upList);
                    }
                    else{
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al actualizar los datos de la habitación',
                            'error'
                        )
                    }
                }


                /* Agregar una constante para actualizar el estado del modal */
                const [showState, setShowState] = useState(false);
                const handleCloseState = () => { setShowState(false); }
                const handleOpenState = () => { setShowState(true); }

                /* Estado para obtener los datos del registro que se va a editar */
                const [dataModalState, setDataModalState] = useState({});

                const handleChangeModalState = ({ target }) => {
                    setDataModalState({
                        ...dataModalState,
                        [target.name]: target.value
                    })
                }

                
                const handleSubmitState = async(e)=>{
                    e.preventDefault();
                    const response=await axios.put(`${url}/${dataModalState._id}`,dataModalState);
                    console.log(response);  
                    if(response.status===200){
                        Swal.fire({  
                            title: '¡Cambio guardado!',
                            html: `<p>El estado de la habitación <strong> ${dataModal.nombrehab} </strong> ha sido actualizado exitosamente! </p>`,
                            confirmButtonColor: "#333333",
                            background: '#FFFDFB',
                            color: '#000',
                            imageUrl: 'https://i.postimg.cc/85KV3zTq/Hotelia-horizontal-negro.png',
                            imageWidth: 250,
                            icon: 'success',
                            showCloseButton: true
                        })
                        handleCloseState();
                        setUplist(!upList);
                    }
                    else{
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al cambiar el estado de la habitación',
                            'error'
                        )
                    }
                }


                /* Agregar una constante para actualizar el estado del modal */
                const [showBooking, setShowBooking] = useState(false);
                const handleCloseBooking = () => { setShowBooking(false); }
                const handleOpenBooking = () => { setShowBooking(true); }

                /* Estado para obtener los datos del registro que se va a editar */
                const [dataModalBooking, setDataModalBooking] = useState({});

                const handleChangeModalBooking = ({ target }) => {
                    setDataModalState({
                        ...dataModalBooking,
                        [target.name]: target.value
                    })
                }
    
                /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
                useEffect(() => {
                    getData().then((response) => {
                        setList(response.data);
                    })
                }, [upList])
                console.log([list]);
   
    
    return(
        <div className="listado-habitacion-admin">
        
            <div>
                <SidebarAdmon/>
            </div>
            
            <div className="listado-habitacion-admin__container">
                <h1 class='text-center mt-4'>Habitaciones</h1>

                <div className="list-rooms__filters">
                    
                    <div className="list-rooms__select-group">
                        <label className="list-rooms__label">Categoría</label>
                        <select className="list-rooms__select">
                            <option selected>Todas</option>
                            <option value="1">Habitación sencilla</option>
                            <option value="2">Habitación doble</option>
                            <option value="3">Habitación de lujo</option>
                        </select>
                    </div>

                    <div className="list-rooms__select-group">
                        <label className="list-rooms__label">Estado</label>
                        <select className="list-rooms__select">
                            <option selected>Todas</option>
                            <option value="1">Activa</option>
                            <option value="2">Inactiva</option>
                        </select>
                    </div>

                </div> 

                <section className='list-rooms'>

                {
                list.map((es, index) => (
                    <CardAdmin
                        key={index}
                        habitaciones={es}
                        setUplist={setUplist}
                        upList={upList}
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        setDataModal={setDataModal}
                        handleCloseState={handleCloseState}
                        handleOpenState={handleOpenState}
                        setDataModalState={setDataModalState}
                        handleCloseBooking={handleCloseBooking}
                        handleOpenBooking={handleOpenBooking}
                        setDataModalBooking={setDataModalBooking}
                    />
                ))
                }

                <Modal 
                    show={show} 
                    onHide={handleClose} 
                    className='modal'
                    size="lg"
                >
                    
                    <Modal.Header closeButton className='header'>
                        <ModalTitle className='Tittle'>
                            Editar Habitación {dataModal.nombrehab}
                        </ModalTitle>
                    </Modal.Header>

                    <Form onSubmit={handleSubmit}>
                        
                        <ModalBody className='modal-body'>

                            <h4 className="title-room-information"><strong>Información básica</strong></h4>

                            <div className="modal-body-information">
                                <Form.Group class="mb-3">
                                    <Form.Label className='label'><strong>Nombre de la habitación</strong></Form.Label>
                                    <Form.Control className='input'
                                        type="text"
                                        name="nombrehab"
                                        required
                                        value={dataModal.nombrehab}
                                        onChange={handleChangeModal}
                                    />
                                </Form.Group>

                                <Form.Group class="mb-3">
                                    <Form.Label className='label'><strong>N° de la habitación</strong></Form.Label>
                                    <Form.Control className='input'
                                        type="number"
                                        name="_id"
                                        required
                                        value={dataModal._id}
                                        disabled
                                    />
                                </Form.Group>
                            </div>
                            
                            <div className="title-room-information__secondary">
                            <Form.Group class="mb-3">
                                <Form.Label className='label'><strong>N° camas</strong></Form.Label>
                                <Form.Control
                                    type="number"
                                    name="camas"
                                    required
                                    value={dataModal.camas}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>

                            <Form.Group class="mb-3">
                                <Form.Label className='label'><strong>N° huéspedes</strong></Form.Label>
                                <Form.Control
                                    type="number"
                                    name="capacidad"
                                    required
                                    value={dataModal.capacidad}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>


                            <Form.Group class="mb-3">
                                <Form.Label className='label'><strong>Valor noche</strong></Form.Label>
                                <Form.Control
                                    type="number"
                                    name="valornoche"
                                    required
                                    value={dataModal.valornoche}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>
                            </div>

                            <Form.Group class="mb-3">
                                <Form.Label className='label'><strong>Descripción</strong></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Descripción de la habitación"
                                    name="descripcion"
                                    required
                                    value={dataModal.descripcion}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>

                            <div className="container-img-description">

                            <div className='modal-room-admin__img text-center mb-4'>
                                <img src={`https://app-hotelia3.herokuapp.com${dataModal.img}`} alt={dataModal.nombrehab}></img>
                            </div>

                            <Form.Group class="mb-3">
                                <Form.Label className='label' htmlFor="img"><strong>Imagen</strong></Form.Label>
                                
                                <p>{dataModal.img}</p>
                                
                                    
                                <Form.Control
                                    type="file"
                                    id="img"
                                    name="img"
                                    
                                    onChange={handleChangeModal}
                                />
                            </Form.Group></div>

                            <h4 className="title-room-information"><strong>Información adicional</strong></h4>

                            <div className="room-information__adittional">
                            <Form.Group class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-toilet"></i> <p>Baño</p>
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>Si</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="banio"
                                    id='si'
                                    value='si'
                                    onChange={handleChangeModal}
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>No</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="banio"
                                    id='no'
                                    value='no'
                                    onChange={handleChangeModal}
                                />
                                </div>
                            </Form.Group>

                            <Form.Group class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-tv"></i> <p>Televisión</p>
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>Si</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="tv"
                                    id='si'
                                    value='si'
                                    onChange={handleChangeModal}
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>No</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="tv"
                                    id='no'
                                    value='no'
                                    onChange={handleChangeModal}
                                />
                                </div>
                            </Form.Group>

                            <Form.Group class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-wifi"></i> <p>Wifi</p>
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>Si</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="wifi"
                                    id='si'
                                    value='si'
                                    onChange={handleChangeModal}
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>No</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="wifi"
                                    id='no'
                                    value='no'
                                    onChange={handleChangeModal}
                                />
                                </div>
                            </Form.Group>

                            <Form.Group class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                <div><img src={IconoNevera} alt="Icono de nevera" /></div> <p>Nevera</p>
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>Si</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="nevera"
                                    id='si'
                                    value='si'
                                    onChange={handleChangeModal}
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>No</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="nevera"
                                    id='no'
                                    value='no'
                                    onChange={handleChangeModal}
                                />
                                </div>
                            </Form.Group>

                            <Form.Group class="mb-3" className="room-information__radio">
                                <div className="room-information__radio-item">
                                    <i class="fa-solid fa-vault"></i> <p>Caja fuerte</p>
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>Si</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="cajafuerte"
                                    id='si'
                                    value='si'
                                    onChange={handleChangeModal}
                                />
                                </div>
                                <div className="room-information__radio-group">
                                <Form.Label className='label'>No</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="cajafuerte"
                                    id='no'
                                    value='no'
                                    onChange={handleChangeModal}
                                />
                                </div>
                            </Form.Group>
                            </div>

                        </ModalBody>

                        <ModalFooter className='footer'>
                            <button className='card-admin__cardButtonSecondary' onClick={handleClose}>Cerrar</button>
                            <button className='card-admin__cardButtonPrincipal' type="submit">Guardar cambios</button>
                        </ModalFooter>

                    </Form>

                </Modal>

                <Modal show={showState} onHide={handleCloseState} className="modal" centered>
                    
                    <Modal.Header closeButton className='header'>
                        <ModalTitle className='Tittle'>
                            Habitación {dataModalState.nombrehab}
                        </ModalTitle>
                    </Modal.Header> 

                    <Form onSubmit={handleSubmitState}>
                        
                        <ModalBody className='modal-body'>

                            <p className="card-admin__modal-actual-state"><strong>Estado actual de la habitación: </strong>{dataModalState.estado}</p>

                            <Form.Group class="mb-3">
                                <Form.Label className='label'><strong>Cambiar estado</strong></Form.Label>

                                <Form.Select
                                    name="estado"
                                    required
                                    onChange={handleChangeModalState}
                                    >
                                    <option value={dataModalState.estado}>--Selecciona el estado--</option>
                                    <option value="Disponible">Disponible</option>
                                    <option value="No disponible">No disponible</option>
                                    <option value="En mantenimiento">En mantenimiento</option>
                                </Form.Select>
                            </Form.Group>

                        </ModalBody>

                        <ModalFooter className='footer'>
                            <button className='card-admin__cardButtonSecondary' onClick={handleCloseState}>Cerrar</button>
                            <button className='card-admin__cardButtonPrincipal' type="submit">Guardar cambios</button>
                        </ModalFooter>
                        

                    </Form>

                </Modal>


                <Modal
                    show={showBooking}
                    onHide={handleCloseBooking}
                >
                    <Modal.Header className='title-modalroom'>
                        <h4>Reserva {dataModalState.nombrehab}</h4>
                    </Modal.Header>
                    <Modal.Body className='row m-auto'>
                        <img src={LogoHotelia} alt='logo-hotelia' className='log-modal-reserve' />
                        <form className='cont-form-reserve'
                            onSubmit={handleSubmitA}>
                            <div className='cont-entrada'>
                                <label for='entrada' className='ps-4 pt-4'>Entrada: </label>
                                <input
                                    id='fentrada'
                                    name='fentrada'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    data-mask required
                                    value={data.fentrada}
                                />
                            </div>
                            <div className='cont-entrada'>
                                <label for='salida' className='ps-4 pt-3'>Salida: </label>
                                <input
                                    id='fsalida'
                                    name='fsalida'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    value={data.fsalida}
                                />
                            </div>
                            {/*<div className='input-fullname'>
                                <label>Nombre completo: </label>
                                <input
                                    name='userId'
                                    type='text'
                                    //value={values.fullname}
                                    //onBlur={handleBlur}
                                    max="10"
                                />
                                {/*{errors.fullname && <div className='error message-validate-reserve'>
                                            {errors.fullname}</div>}
                            </div>*/}
                            <div className='input-doc'>
                                <label>No.Documento: </label>
                                <input
                                    id='userId'
                                    name='userId'
                                    type='text'
                                    value={data.userId}
                                    onChange={handleChangeA}
                                //value={values.doc}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}

                            </div>
                            <div className='input-doc'>
                                <label>Habitación: </label>
                                <input
                                    id='habitacionId'
                                    name='habitacionId'
                                    type='text'
                                    value={data.habitacionId}
                                    onChange={handleChangeA}
                                    //value={values.doc}
                                    //onBlur={handleBlur}
                                    max="10"
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}

                            </div>
                            <div className='input-doc'>
                                <label>Cantidad de noches: </label>
                                <input
                                    id='cantidadNoches'
                                    name='cantidadNoches'
                                    type='number'
                                    value={data.cantidadNoches}
                                    onChange={handleChangeA}
                                //onChange={handleChange}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.cantnoches && <div className='error message-validate-reserve'>
                                            {errors.cantnoches}</div>}*/}

                            </div>
                            <span className='total-nigth m-auto pt-4 pb-3'><label>VALOR TOTAL </label></span>
                            <input className='text-value-nigth m-auto mt-1 mb-1'
                                id='totalreserva'
                                name='totalreserva'
                                type='text'
                                placeholder='$'
                                onChange={handleChangeA}
                                value={data.totalreserva} />

                            <button className='btn-closemodal' type='submit' >Guardar reserva</button>
                        </form>
                    </Modal.Body>

                    <ModalFooter className='footer'>
                            <button className='card-admin__cardButtonSecondary' onClick={handleCloseBooking}>Cancelar</button>
                            <button className='card-admin__cardButtonPrincipal' type="submit">Guardar reserva</button>
                    </ModalFooter>
                </Modal>

            </section>

            </div>

        </div>
    );
}
export default ListadoHabitacion;