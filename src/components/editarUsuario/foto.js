import React from 'react';
function Foto({img, descf}){
    const url = "https://app-hotelia3.herokuapp.com/users/1254784102";

    return(
        <div className="cambiofoto">
            <img src={img} alt={descf} />
            <div className="contenedor-cambiar-foto">
                <button
                className="cambiar-foto-editarusuario"><i className="fa-solid fa-upload"></i></button>
                <input 
                 type="file" 
                 name="img"
                 id="img"
                 className="formhuesped-image" 
                 accept=".jpg,.png" 
                />
            </div>
        </div>
    );
}
export default Foto