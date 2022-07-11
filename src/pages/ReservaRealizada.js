import SidebarHuesped from "../components/sidebar/SidebarHuesped";
import VistaReserva from "../components/vistaReserva/VistaReserva";

function ReservaRealizada() {
    return (
        <div>
            <div>
               <SidebarHuesped/>
            </div>
            <div>
                <VistaReserva />
            </div>
        </div>
    );
}

export default ReservaRealizada;