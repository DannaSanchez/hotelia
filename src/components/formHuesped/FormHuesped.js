import "./FormHuesped.css"
import logoblanco from "../../img/Hotelia-horizontal-blanco.png"
function FormHuesped (){
    return(
        <main className="huesped-background-img">
            <div className="huesped">
            <div className="logo-formhuesped"> 
                <img src={logoblanco}/>
                <h5>Eres más que bienvenido</h5>
            </div>
            
            <div className="formhuesped">
                <h1>Registrate</h1>
                <formulario action="">
                    <label>Usuario</label>
                    <input
                        label="Usuario"
                        placeholder="john123"
                    />
                </formulario>
            </div>
            </div>
        </main>
    );
}
export default FormHuesped