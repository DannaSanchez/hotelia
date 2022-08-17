import EditarAdmin from "../components/editarAdmin/EditarAdmin";
import SidebarHuesped from "../components/sidebar/SidebarHuesped";

function PerfilAdmin (){
    return(
        <div >
            <div>
               <SidebarHuesped/>
            </div>
            <div>
                <EditarAdmin/>
            </div>
        </div>
        
    );
}
export default PerfilAdmin