
import '../card/Card.css';

import Accordion from 'react-bootstrap/Accordion';

import axios from 'axios'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardReserva = () => {


        const [usuario, setUsuario] = useState([])

        const [dato, setDato] = useState([])

        const {_id} = useParams()
        const obtenerUsuario = async()=>{
            const respuesta = await axios.get(`https://app-hotelia3.herokuapp.com/reservas/${_id}`)
            const usuario = await respuesta.data
            setUsuario(usuario)
            setDato(usuario.user)
            console.log(respuesta)
        }

        useEffect(()=>{
            obtenerUsuario()
        },[])
    

    return (
        <>


        <Card className='card-admin__booking'>
        <Card.Header 
            as="h5"  
            className='card-admin__booking-header' 
            style={{ background:'linear-gradient(49.54deg, #337AB7 2.89%, #0B3860 80.34%)', color:'white' 
        }}>
        <div className='booking-header'>
            <p><strong>Huésped:</strong></p>
            <p><strong>Fecha de reserva:</strong></p>
        </div>
        </Card.Header>
        <Card.Body>
            <Card.Title>Reservas</Card.Title>
            <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            </Card.Text>
            <Button variant="primary">Ver más información</Button>
        </Card.Body>
        </Card>


        <Accordion className='reservation-accordion'>
            <Accordion.Item eventKey={usuario}>
                <Accordion.Header className='reservation-accordion__header'>
                    <div>
                        <strong>Fecha de reserva:</strong>{usuario.freserva} 
                        <strong className='reservation-accordion__item'>N° Reserva:</strong>{usuario._id}
                    </div>
                    <div>
                        <strong className='reservation-accordion__item'>Nombre:</strong>{usuario.nombre} 
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {dato.nombre}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
    )}

export default CardReserva;
