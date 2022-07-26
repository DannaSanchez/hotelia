
import '../card/Card.css';

import Accordion from 'react-bootstrap/Accordion';

function CardReserva({ reservas}) {

    return (
        <>
        <Accordion className='reservation-accordion'>
            <Accordion.Item eventKey={reservas._id}>
                <Accordion.Header className='reservation-accordion__header'>
                    <div>
                        <strong>Fecha de reserva:</strong>{reservas.freserva} 
                        <strong className='reservation-accordion__item'>N° Reserva:</strong>{reservas._id}
                    </div>
                    <div>
                        <strong className='reservation-accordion__item'>Nombre:</strong>{reservas.freserva} 
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {reservas.user.nombre}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
    )}

export default CardReserva;
