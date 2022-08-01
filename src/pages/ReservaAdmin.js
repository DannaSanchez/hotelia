import axios from 'axios';
import { useState, useEffect } from 'react';

import SidebarAdmon from "../components/sidebar/SidebarAdmon";
import CardReserva from "../components/listadoAdmin/ReservationTable";
import '../components/listadoAdmin/ReservaAdmin.css'

import Imagen from '../components/formHabitacion/Imagen';
import Example from '../components/listadoAdmin/Modal';


function ReservaAdmin (){

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

    return(

        <div className="admin-reservation">

            <div>
                <SidebarAdmon/>
            </div>

            <div className='admin-reservation__card-reserva'>
                <h1 class='text-center mt-4'>Reservas</h1>
                {
                list.map((es, index) => (
                    <CardReserva
                        key={index}
                        reservas={es}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
                }
 
            </div>

            <Example/>
        
        </div>
    )}

    export default ReservaAdmin;