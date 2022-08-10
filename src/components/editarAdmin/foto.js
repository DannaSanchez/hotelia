import React from 'react';
import axios from "axios";
import { useState} from "react";
import Swal from 'sweetalert2';
function Foto({img, descf}){
    const url = "https://hoteliakuepag7.herokuapp.com/users/1234567890";

    const [estadoModalDatosF, cambiarEstadoDatosF] = useState(false);
    const [dataModal,setDataModal]=useState({});

    const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
        setDataModal({...dataModal,[target.name]:target.value
        });
    }


    const [upList, setUplist] =useState([false]); 

    const handleSubmit=async(e)=>{
        e.preventDefault();
        dataModal.img = dataModal.img.replace("C:\\fakepath\\","/public/");
        const response=await axios.put(`${url}`,dataModal,{headers: {'Content-Type':'multipart/form-data'}});
        console.log(response);

        if(dataModal.img!=null){
            console.log(dataModal.img);
            Swal.fire(
                '¡Cambios Guardados!',
                `Los datos de contacto han sido actualizados`,
                'success'
            )
            window.location.href='/editarperfil'
            setUplist(!upList);
        }else{
            Swal.fire(
                '¡Error!',
                'Hubo un problema al editar los datos de contacto',
                'error'
                )
        }
        
    }
    return(
        <div className="cambiofoto">
            <img src={img} alt={descf} />
            <div className="contenedor-cambiar-foto">
                <button onSubmit={handleSubmit}
                className="cambiar-foto-editarusuario"><i className="fa-solid fa-upload"></i></button>
                <input 
                 type="file" 
                 name="img"
                 id="img"
                 className="formhuesped-image" 
                 accept=".jpg,.png" 
                 value={dataModal.img}
                 onChange={handleChangeModal}
                />
            </div>
        </div>
    );
}
export default Foto