import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import '../card/Card.css';
import Swal from 'sweetalert2';

const CardReserva = ({ reservas, setUplist, upList, }) => {

    const [showCancel, setShowCancel] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    const [showButtons, setShowButtons] = useState(true);

    /* 1. Definir url del API a la que me voy a conectar 
    const url="https://app-hotelia3.herokuapp.com/reservas";*/

    /* 2. Función asincrona para borr<r a partir del listener del botón eliminar */
    const handleDelete=()=>{
        Swal.fire({
            title: '¿Está seguro que desea cancelar esta reserva?',
            text: "¡No podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9C2759',
            cancelButtonColor: '#333333',
            confirmButtonText: 'Si, ¡Cancelar!',
            cancelButtonText:'No, regresar'
          }).then((result) => {
            if (result.isConfirmed) {
                        setShowCancel(true);
                        setShowButtons(false);
                        Swal.fire({
                            title:'Cancelada',
                            text:'La reserva ha sido cancelada de manera exitosa',
                            icon:'success',
                            confirmButtonColor:'#333333',
                          })
                    }  
                })     
            }

    const confirmarReserva =()=>{
        setShowConfirm(true);
        setShowButtons(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Reserva realizada con éxito',  
            showConfirmButton: true,
            confirmButtonColor: "#333333",
            html: `<p>La reserva del usuario <strong>${dataUser.nombre}</strong> para la habitación <strong>${dataRoom.nombrehab}</strong> ha sido confirmada con éxito </p>`,
            imageUrl: `https://app-hotelia3.herokuapp.com${dataRoom.img}`,
            imageWidth: 300,
          })
    }

    const user = reservas["user"]
    const dataUser = user[0];

    const room = reservas["habitaciones"];
    const dataRoom = room[0];
    console.log(dataRoom.nombrehab)
    console.log(dataRoom.estado)


    return (
        <>
            <div className='cardReservaAdmin'>
            
            <div className='basic-reservation-data'>
                <h4>Fecha de reserva: {reservas.freserva}</h4> 
                <h4><strong>Usuario: </strong>{dataUser.nombre} {dataUser.apellido}</h4>
            </div>

            <div className="accordion accordion-booking">
                
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseOne${reservas._id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapseOne${reservas._id}`}>
                            Datos de usuario
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-collapseOne${reservas._id}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-headingOne${reservas._id}`}>
                        <div class="accordion-body booking-data-user">
                            <p><strong>Nombres:</strong> {dataUser.nombre}</p>
                            <p><strong>Apellidos:</strong> {dataUser.apellido}</p>
                            <p><strong>{dataUser.tipodoc}:</strong> {dataUser._id}</p>
                            <p><strong>Email:</strong> {dataUser.email}</p>
                            <p><strong>Teléfono:</strong> {dataUser.telefono}</p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseTwo${reservas._id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapseTwo${reservas._id}`}>
                            Datos de la habitación
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-collapseTwo${reservas._id}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-headingTwo${reservas._id}`}>
                        <div class="accordion-body booking-room-data">
                            <div className='booking-data__room-image'>
                                <img src={`https://app-hotelia3.herokuapp.com${dataRoom.img}`} alt={dataRoom.nombrehab}/>
                            </div>
                            
                            <div className='booking-data__room-description'>
                                <div className='booking-data__room-description-title'>
                                    <h4>{dataRoom.nombrehab}</h4>
                                    <h4>N° habitación: {dataRoom._id}</h4> 
                                </div>    
                                <p><span>${dataRoom.valornoche} COP</span> valor por noche</p>
                                <p>{dataRoom.descripcion}</p>
                                <p><i class="fa-solid fa-users"></i> {dataRoom.capacidad}</p>
                                <p><i class="fa-solid fa-bed"></i> {dataRoom.camas}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <h2 class="accordion-header" >
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapseThree${reservas._id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapseThree${reservas._id}`}>
                            Datos de reserva
                        </button>
                    </h2>
                    <div id={`panelsStayOpen-collapseThree${reservas._id}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-headingThree${reservas._id}`}>
                        <div class="accordion-body booking-data__description">
                            <div className='booking-data__booking-description'>
                                <p><strong>Fecha de entrada:</strong> {reservas.fentrada}</p>
                                <p><strong>Fecha de salida:</strong> {reservas.fsalida}</p>
                                <p><strong>Total de noches:</strong> {reservas.cantidadNoches}</p>
                            </div>

                            <div className='booking-prices'>
                                <div className='booking-warning'>
                                    <p>Podrás cancelar esta reserva hasta 6 horas antes de la fecha y hora de entrada estipuladas aquí.</p>
                                </div>

                                <div className='booking-data__booking-price'>
                                    <h5 className='booking-description__subtotal'><strong>SUBTOTAL:</strong> ${dataRoom.valornoche} COP</h5>

                                    <h4 className='booking-description__total'><strong>TOTAL:</strong> ${reservas.totalreserva} COP</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showButtons && <div className='card-admin__buttons-booking'>
                <button className='card-admin__cardButtonSecondary button-booking hover-button' onClick={()=>handleDelete()}>Cancelar reserva</button>
                <Button variant='secondary' className='card-admin__cardButtonPrincipal button-booking' type="submit" onClick={()=>confirmarReserva()}>Confirmar reserva</Button>
            </div>}

            {showCancel && <p className="CancelMsg">Reserva cancelada</p>}

            {showConfirm && <p className="ConfirmMsg">Reserva confirmada</p>}

            </div>
        </>
    )
}

export default CardReserva;
