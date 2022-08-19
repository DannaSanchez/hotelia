import EditarAdmin from "../components/editarAdmin/EditarAdmin";
import SidebarAdmon from "../components/sidebar/SidebarAdmon";

function PerfilAdmin (){
    return(
        <div >
            <div>
               <SidebarAdmon/>
            </div>
            <div>
                <EditarAdmin/>
            </div>
        </div>
        
    );
}
export default PerfilAdmin