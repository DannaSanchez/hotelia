import { Card, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';
import '../card/Card.css'

function CardRoom({ habitaciones }) {

    return (
        
        
            <Card  style={{ width: '20rem' }} key={habitaciones._id} className="list-rooms__card">
                <Card.Img variant="top" src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`}/>
                <Card.Title className="list-rooms__cardTitle">{habitaciones.nombrehab}</Card.Title>
                
                <Card.Body>    
                    <Card.Text>
                        <p className='list-rooms__cardPrice'>${habitaciones.valornoche}</p>
                        <p>{habitaciones.descripcion}</p>
                        <p><strong>N° habitación:</strong> {habitaciones._id}</p>
                        <p><strong>Estado:</strong> {habitaciones.estado}</p>
                    </Card.Text>
                    <div className='list-rooms__buttons'>
                        <Link to="/modificar-habitaciones-admin" ><Button variant="primary" className='list-rooms__cardButtonPrincipal'>Modificar</Button></Link>
                        <Button variant="secondary" className='list-rooms__cardButtonSecondary'>{habitaciones.estado}</Button>
                    </div>
                </Card.Body> 
            </Card> 

    );
}

export default CardRoom;