import { Link } from 'react-router-dom';
import './FormHabitaciones.css';
import dobleroom from '../../img/doble-room.jpg';
import { Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function FormHabitaciones() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='cont-habitaciones'>
            <div className='box-form'>
                <div className='title-room'>
                    <h4>Busqueda de Habitaciones</h4>
                </div>
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
            <div className='box-card row'>
                <div className='col-12 col-md-6 mt-3'>
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
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='title-modalroom'>Habitación doble</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='sub-modalroom'>Habitación:</p>
                        <ul>
                            <li>Vista a la piscina</li>
                            <li>Canales de pago por visión</li>
                            <li>teléfono</li>
                            <li>Canales por cable</li>
                            <li>Televisión de pantalla plana</li>
                            <li>Aire acondicionado</li>
                        </ul>

                        <p className='sub-modalroom'>Baño:</p>
                        <ul>
                            <li>Ducha</li>
                            <li>Artículos de aseo gratuitos</li>
                            <li>Baño privado</li>
                            <li>Bañera o ducha</li>
                            <li>Toallas</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-closemodal' onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>

                <div className='col-12 col-md-6 mt-3'>
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
            </div>
        </div>
    );
}

export default FormHabitaciones;