import EditarUsuario from "../components/editarUsuario/EditarUsuario";
import SidebarHuesped from "../components/sidebar/SidebarHuesped";

function PerfilUsuario (){
    return(
        <div >
            <div>
               <SidebarHuesped/>
            </div>
            <div>
                <EditarUsuario/>
            </div>
        </div>
        
    );
}
export default PerfilUsuario