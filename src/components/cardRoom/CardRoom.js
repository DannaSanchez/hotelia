import './CardRoom.css';
import { Card, Button } from 'react-bootstrap';
import dobleroom from '../../img/doble-room.jpg';

function CardRoom({ habitaciones }) {
    return (
        <div className='box-card'>
            <div className='card1'>
                <Card style={{ width: '18rem' }} className='card-room'>
                    <div>
                        <Button onClick={''} className='btn-more'>
                            <i class="bi bi-plus-lg"></i>
                            <p>Ver más</p></Button>
                        <Card.Img variant="top" src={dobleroom} className='p-2' />
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
        </div>
    );
}

export default CardRoom;
