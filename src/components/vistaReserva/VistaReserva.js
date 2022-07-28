import './VistaReserva.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardReserve from '../cardReserve/CardReserve';

function VistaReserva() {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "https://app-hotelia3.herokuapp.com/reservas";
    /*2.Generar fución asincrona*/

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
    /*5.Crear otro estado para refrescar el listado despues de eliminar*/
    const [upList, setUplist] = useState([false]);


    /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log([list]);


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='title-room2 mt-5 mb-5'>
                <h2>Mis Reservas</h2>
            </div>
            <div className='cont-cards-reserve'>
                {
                    list.map((es, index) => (
                        <CardReserve
                            key={index}
                            reservas={es}
                            setUplist={setUplist}
                            upList={upList}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default VistaReserva;