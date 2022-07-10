import { Link } from 'react-router-dom';
import './FormHabitaciones.css';
import dobleroom from '../../img/doble-room.jpg';
import dobleroom1 from '../../img/room-doble.jpg';
import dobleroom2 from '../../img/room-doble2.jpg';
import dobleroom3 from '../../img/room-doble3.jpg';
import { Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function FormHabitaciones() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='cont-habitaciones'>
            <div>
                <div className='title-room'>
                    <h4>Busqueda de Habitaciones</h4>
                </div>
                <div className='box-form'>
                    <form className='cont-form-room'>
                        <div className='cont-entrada'>
                            <label for='entrada'>Entrada: </label>
                            <input name='entrada' type='date' />
                        </div>
                        <div className='cont-salida'>
                            <label for='salida'>Salida: </label>
                            <input name='salida' type='date' />
                        </div>
                        <div className='input-adultos'>
                            <label>Adultos: </label>
                            <input name='numadultos' type='number' />
                        </div>
                        <div className='input-ninos'>
                            <label>Niños: </label>
                            <input name='numninos' type='number' />
                        </div>
                        <Link to="/" className="item-ver">Ver habitaciones disponibles</Link>
                    </form>
                </div>
            </div>
            <div className='box-card'>
                <div className='card1'>
                    <Card style={{ width: '18rem' }} className='card-room'>
                        <div>
                            <Button onClick={handleShow} className='btn-more'>
                                <i class="bi bi-plus-lg"></i>
                                <p>Ver más</p></Button>
                            <Card.Img variant="top" src={dobleroom} className='p-2' />
                            <div className='item-name-room'>
                                <p className="item-img">Habitación Doble</p>
                            </div>

                        </div>
                        <Card.Body>
                            <Card.Text className='price-text text-center'>$ 128.000</Card.Text>
                            <Button className='item-reservar' onClick={handleShow}>Reservar</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }} className='card-room'>
                        <div>
                            <Button onClick={handleShow} className='btn-more'>
                                <i class="bi bi-plus-lg"></i>
                                <p>Ver más</p></Button>
                            <Card.Img variant="top" src={dobleroom} className='p-2' />
                            <div className='item-name-room'>
                                <p className="item-img">Habitación Doble</p>
                            </div>

                        </div>
                        <Card.Body>
                            <Card.Text className='price-text text-center'>$ 128.000</Card.Text>
                            <Button className='item-reservar' onClick={handleShow}>Reservar</Button>
                        </Card.Body>
                    </Card>
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                >
                    <Modal.Header className='title-modalroom'>
                        <h4>Habitación doble</h4>
                    </Modal.Header>
                    <div id="carouselExampleInterval" class="carousel slide color-body" data-bs-ride="carousel">
                        <div className="carousel-inner img-slide">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src={dobleroom3} class="d-block w-img" alt='' />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={dobleroom1} class="d-block w-img" alt='' />
                            </div>
                            <div class="carousel-item">
                                <img src={dobleroom2} class="d-block w-img" alt='' />
                            </div>
                        </div>
                        <button class="carousel-control-prev color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden ">Next</span>
                        </button>
                    </div>
                    <Modal.Body className='row m-auto'>
                        <p className='p-3'>Las Habitaciones Dobles de Hotelia Bogotá son amplias, con 27 m², y están pensadas para asegurar el mejor descanso durante una estadía en la capital de Colombia.
                            Con cama de 140 m, estas habitaciones son una buena propuesta para las parejas pues están pensadas para alojar a 1 ó 2 personas con la máxima comodidad. </p>
                        <div className='col-12 col-md-6'>
                            <p className='sub-modalroom pb-1'>Habitación:</p>
                            <div className='d-flex'>
                                <i className='fa-solid fa-person-swimming icons-modal-room'></i>
                                <p className='ps-2'>Vista a la piscina</p>
                            </div>
                            <div className='d-flex'>
                                <i className='fa-solid fa-tv icons-modal-room'></i>
                                <p className='ps-2'>Canales de pago por visión</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-phone icons-modal-room'></i>
                                <p className='ps-2'>Teléfono</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-tower-cell icons-modal-room'></i>
                                <p className='ps-2'>Canales por cable</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-tv-fill icons-modal-room"></i>
                                <p className='ps-2'>Televisión de pantalla plana</p>
                            </div>
                            <div className='d-flex'>
                                <i class="fa-solid fa-wind icons-modal-room"></i>
                                <p className='ps-2'>Aire acondicionado</p>
                            </div>

                        </div>
                        <div className='col-12 col-md-6'>
                            <p className='sub-modalroom pb-1'>Baño:</p>
                            <div className='d-flex'>
                                <i class='fa-solid fa-shower icons-modal-room'></i>
                                <p className='ps-2'>Ducha</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-broom icons-modal-room'></i>
                                <p className='ps-2'>Artículos de aseo gratuitos</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-toilet icons-modal-room'></i>
                                <p className='ps-2'>Baño privado</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-bath icons-modal-room'></i>
                                <p className='ps-2'>Bañera o ducha</p>
                            </div>
                            <div className='d-flex'>
                                <i class='fa-solid fa-toilet-paper icons-modal-room'></i>
                                <p className='ps-2'>Toallas</p>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-closemodal' onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        </div>
    );
}

export default FormHabitaciones;