import axios from 'axios';
import { useEffect, useState } from 'react';
import CardAdmin from './CardAdmin';


function ListCardAdmin (){
    /* 1. Definir url del API a la que me voy a conectar */
            const url = "https://app-hotelia3.herokuapp.com/habitaciones";
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
        
            list.map((es, index) => (
                <CardAdmin
                    key={index}
                    habitaciones={es}
                    setUplist={setUplist}
                    upList={upList}
                />
            ))
        
    )

}

export default ListCardAdmin;