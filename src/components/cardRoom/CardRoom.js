import './CardRoom.css';
import { Card, Modal, Button } from 'react-bootstrap';
import dobleroom from '../../img/doble-room.jpg';
import { useState } from 'react';
import dobleroom1 from '../../img/room-doble.jpg';
import dobleroom2 from '../../img/room-doble2.jpg';
import dobleroom3 from '../../img/room-doble3.jpg';

function CardRoom({ habitaciones }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
    /*5.Crear otro estado para refrescar el listado despues de eliminar*/
    const [upList, setUplist] = useState([false]);

    return (

        <div className='box-card'>
            <div className='card1'>
                <Card style={{ width: '18rem' }} className='card-room'>
                    <div>
                        <Button onClick={handleShow} className='btn-more'>
                            <i class="bi bi-plus-lg"></i>
                            <p>Ver más</p></Button>
                        <Card.Img variant="top" src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`} className='img-card-room p-2' />
                        <div className='item-name-room'>
                            <p className="item-img">{habitaciones.nombrehab}</p>
                        </div>

                    </div>
                    <Card.Body>
                        <Card.Text className='price-text text-center'>$ {habitaciones.valornoche}</Card.Text>
                        <Button className='item-reservar' onClick={''}>Reservar</Button>
                    </Card.Body>
                </Card>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header className='title-modalroom'>
                    <h4>{habitaciones.nombrehab}</h4>
                </Modal.Header>
                <div id="carouselExampleInterval" class="carousel slide color-body" data-bs-ride="carousel">
                    <div className="carousel-inner img-slide">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`} class="d-block w-img" alt='' />
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
                <h5></h5>
                <Modal.Body className='row m-auto'>
                    <p className='p-3'>{habitaciones.descripcion}</p>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i class="fa-solid fa-wifi icons-modal-room"></i>
                                <p className='item-modal-room ps-2'>Wifi: </p>
                            </div>
                            <p className='ps-2'>{habitaciones.wifi}</p>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i class="fa-solid fa-vault icons-modal-room"></i>
                                <p className='item-modal-room ps-2'>Caja fuerte: </p>
                            </div>
                            <p className='ps-2'>{habitaciones.cajafuerte}</p>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i class="bi bi-tablet icons-modal-room"></i>
                                <p className='item-modal-room ps-2'>Nevera: </p>
                            </div>
                            <p className='ps-2'>{habitaciones.nevera}</p>
                        </div>

                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i class="bi bi-tv-fill icons-modal-room"></i>
                                <p className='item-modal-room ps-2'>Televisión: </p>
                            </div>
                            <p className='ps-2'>{habitaciones.tv}</p>
                        </div>

                        <div className='d-flex'>
                            <div className='d-flex'>
                                <i class='fa-solid fa-toilet icons-modal-room pt-1'></i>
                                <p className='item-modal-room ps-2'>Baño: </p>
                            </div>
                            <p className='ps-2'>{habitaciones.banio}</p>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-closemodal' onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CardRoom;
