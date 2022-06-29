import './VistaReserva.css';
import { Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import dobleroom from '../../img/doble-room.jpg';
import { useState } from 'react';

function VistaReserva() {

    const cancelarReserva = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Cancelar reserva',
            html: '<p>Si cancela esta reservación, no se podrá revertir</p>',
            showCancelButton: true,
            cancelButtonColor: "#9C2759",
            confirmButtonColor: "#333333",
            background: '#FFFDFB',
            color: '#000'
        })
    }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='title-room mt-5 mb-5'>
                <h4>Mis Reservas</h4>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <Card style={{ width: '22rem' }} className='card-room'>
                        <div>
                            <Card.Img variant="top" src={dobleroom} className='p-2' />
                        </div>
                        <Card.Body className='text-cardreserve'>
                            <p><span>Fecha de entrada:  </span>20/Julio/2022</p>
                            <p><span>Fecha de salida:  </span>24/Julio/2022</p>
                            <p><span>Cantidada de personas:  </span>6</p>
                            <p><span>Habitación:  </span>Doble<br /> Cama doble, dos mesitas de noche, tocador, televisor plasma con vista a la calle.</p>
                            <p><span>VALOR TOTAL:  </span>$540.000</p>
                            <Button className='item-reservar item-cancelar' onClick={cancelarReserva}>Cancelar</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-md-4'>
                    <Card style={{ width: '22rem' }} className='card-room'>
                        <div>
                            <Card.Img variant="top" src={dobleroom} className='p-2' />
                        </div>
                        <Card.Body className='text-cardreserve'>
                            <p><span>Fecha de entrada:  </span>20/Julio/2022</p>
                            <p><span>Fecha de salida:  </span>24/Julio/2022</p>
                            <p><span>Cantidada de personas:  </span>6</p>
                            <p><span>Habitación:  </span>Doble<br /> Cama doble, dos mesitas de noche, tocador, televisor plasma con vista a la calle.</p>
                            <p><span>VALOR TOTAL:  </span>$540.000</p>
                            <Button className='item-reservar item-cancelar' onClick={cancelarReserva}>Cancelar</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-md-4'>
                    <Card style={{ width: '22rem' }} className='card-room'>
                        <div>
                            <Card.Img variant="top" src={dobleroom} className='p-2' />
                        </div>
                        <Card.Body className='text-cardreserve'>
                            <p><span>Fecha de entrada:  </span>20/Julio/2022</p>
                            <p><span>Fecha de salida:  </span>24/Julio/2022</p>
                            <p><span>Cantidada de personas:  </span>6</p>
                            <p><span>Habitación:  </span>Doble<br /> Cama doble, dos mesitas de noche, tocador, televisor plasma con vista a la calle.</p>
                            <p><span>VALOR TOTAL:  </span>$540.000</p>
                            <Button className='item-reservar item-cancelar' onClick={cancelarReserva}>Cancelar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default VistaReserva;