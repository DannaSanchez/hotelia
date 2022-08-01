import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ModalFooter, Form, ModalTitle, ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

//import Cards from "../components/card/Card";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";
//import ImageSlider from "../components/newcard/ImageSlider";
//import ListCardAdmin from "../components/listadoAdmin/ListCardAdmin";
import CardAdmin from '../components/listadoAdmin/CardAdmin';
import IconoNevera from '../img/bxs-fridge.svg';

function ListadoHabitacion (){

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

                const handleSubmit=async(e)=>{
                    e.preventDefault();
                    const response=await axios.put(`${url}/${dataModal._id}`,dataModal);
                    console.log(response);  
                    if(response.status===200){
                        Swal.fire(
                            '¡Cambio Guardado!',
                            `La habitación <strong> ${dataModal.nombrehab} </strong> ha sido actualizada exitosamente!`,
                            'success'
                        )
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

                const handleSubmitState = async(e)=>{
                    e.preventDefault();
                    const response=await axios.put(`${url}/${dataModalState._id}`,dataModalState);
                    console.log(response);  
                    if(response.status===200){
                        Swal.fire(
                            '¡Cambio Guardado!',
                            `El estado de la habitación <strong> ${dataModalState.nombrehab} </strong> ha sido actualizada exitosamente!`,
                            'success'
                        )
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

                            <h4 className="title-room-information">Información básica</h4>

                            <div className="modal-body-information">
                                <Form.Group class="mb-3">
                                    <Form.Label className='label'>Nombre de la habitación</Form.Label>
                                    <Form.Control className='input'
                                        type="text"
                                        name="nombrehab"
                                        required
                                        value={dataModal.nombrehab}
                                        onChange={handleChangeModal}
                                    />
                                </Form.Group>

                                <Form.Group class="mb-3">
                                    <Form.Label className='label'>N° de la habitación</Form.Label>
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
                                <Form.Label className='label'>N° camas</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="camas"
                                    required
                                    value={dataModal.camas}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>

                            <Form.Group class="mb-3">
                                <Form.Label className='label'>N° huéspedes</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="capacidad"
                                    required
                                    value={dataModal.capacidad}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>


                            <Form.Group class="mb-3">
                                <Form.Label className='label'>Valor noche</Form.Label>
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
                                <Form.Label className='label'>Descripción</Form.Label>
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

                            <Form.Group class="mb-3">
                                <Form.Label className='label'>Imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="img"
                                    required
                                    value={dataModal.img}
                                    onChange={handleChangeModal}
                                />
                            </Form.Group>

                            <h4 className="title-room-information">Información adicional</h4>

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

            </section>

            </div>

        </div>
    );
}
export default ListadoHabitacion;