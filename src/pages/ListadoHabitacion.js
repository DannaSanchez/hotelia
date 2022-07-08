import Cards from "../components/card/Card";

function ListadoHabitacion (){
    return(
        <>
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

            <Cards/>
        </>
    );
}
export default ListadoHabitacion;