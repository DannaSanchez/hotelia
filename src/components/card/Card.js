import {Card, Button} from 'react-bootstrap';
import {getAllHabitaciones} from './data-cards';
import {Link} from 'react-router-dom';

import './Card.css'

function Cards() {

    const habitaciones = getAllHabitaciones();

    return (
        <section className='list-rooms'>
            {habitaciones.map(habitacion=>
            <Card  style={{ width: '20rem' }} key={habitacion.id} className="list-rooms__card">
                <Card.Img variant="top" src={habitacion.image}/>
                <Card.Title className="list-rooms__cardTitle">{habitacion.name}</Card.Title>
                
                <Card.Body>    
                    <Card.Text>
                        <p className='list-rooms__cardPrice'>${habitacion.price}</p>
                        <p>{habitacion.description}</p>
                    </Card.Text>
                    <div className='list-rooms__buttons'>
                        <Link to="/modificar-habitaciones-admin" ><Button variant="primary" className='list-rooms__cardButtonPrincipal'>Modificar</Button></Link>
                        <Button variant="secondary" className='list-rooms__cardButtonSecondary'>{habitacion.buttonstate}</Button>
                    </div>
                </Card.Body> 
            </Card>
            )}
        </section>

    );
}
export default Cards;