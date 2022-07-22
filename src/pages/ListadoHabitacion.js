import axios from "axios";
import { useState, useEffect } from "react";

//import Cards from "../components/card/Card";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";
//import ImageSlider from "../components/newcard/ImageSlider";
//import ListCardAdmin from "../components/listadoAdmin/ListCardAdmin";
import CardAdmin from '../components/listadoAdmin/CardAdmin'

function ListadoHabitacion (){

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
        <div className="listado-habitacion-admin">
        
            <div>
                <SidebarAdmon/>
            </div>
            
            <div className="listado-habitacion-admin__container">
                <h1 class='text-center mt-4'>Habitaciones</h1>

                <div className="list-rooms__filters">
                    
                    <div className="list-rooms__select-group">
                        <label className="list-rooms__label">Categoría</label>
                        <select className="list-rooms__select">
                            <option selected>Todas</option>
                            <option value="1">Habitación sencilla</option>
                            <option value="2">Habitación doble</option>
                            <option value="3">Habitación de lujo</option>
                        </select>
                    </div>

                    <div className="list-rooms__select-group">
                        <label className="list-rooms__label">Estado</label>
                        <select className="list-rooms__select">
                            <option selected>Todas</option>
                            <option value="1">Activa</option>
                            <option value="2">Inactiva</option>
                        </select>
                    </div>

                </div> 


                {
                list.map((es, index) => (
                    <CardAdmin
                        key={index}
                        habitaciones={es}
                        setUplist={setUplist}
                        upList={upList}
                    />
                ))
                }

            </div>

        </div>
    );
}
export default ListadoHabitacion;