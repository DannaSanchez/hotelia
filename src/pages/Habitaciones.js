import FormHabitaciones from "../components/formHabitaciones/FormHabitaciones";
import SidebarHuesped from "../components/SidebarHuesped/SidebarHuesped";

function Habitaciones() {
    return (
        <div>
            <div>
                <SidebarHuesped />
            </div>
            <div>
                <FormHabitaciones />
            </div>
        </div>
    );
}

export default Habitaciones;