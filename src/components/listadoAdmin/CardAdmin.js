import React, { useState } from 'react';

import '../card/Card.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import { Card, Modal, Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogoHotelia from '../../img/Hotelia horizontal negro.png'

function CardRoom({ habitaciones, setUplist, upList, handleOpen, setDataModal, handleOpenState, setDataModalState, handleOpenBooking }) {

    const handleEdit = () => {
        handleOpen();
        setDataModal(habitaciones);
    }

    const handleEditState = () => {
        handleOpenState();
        setDataModalState(habitaciones);
    }


    const [data, setData] = useState({ fentrada: "", fsalida: "", cantidadNoches: "", totalreserva: "", userId: "", habitacionId: "" });
    const handleChangeA = ({ target }) => {

        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const navigate = useNavigate();

    const url = "https://app-hotelia3.herokuapp.com/reservas";

    const handleSubmitA = async (e) => {
        e.preventDefault();
        console.log(data);
        const response = await axios.post(url, data);
        console.log(response);
        if (response.status === 200) {
            Swal.fire({
                title: '¡Reserva guardada!',
                html: `<p>¡La reserva de la habitación <strong> ${data.nombrehab} </strong> ha sido guardada exitosamente! </p>
                       <p>¡Ya casi terminas!, Confirma tu reserva en el apartado de reservas</p>`,
                confirmButtonColor: "#333333",
                icon: 'success',
                showCloseButton: true
        })
            navigate("/listado-reservas-admin");
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar tu reserva!`,
                'error'
            )
        }
    }



    const disableDate = new Date().toISOString().slice(0, 10);


    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const cantidadNoches = () => {
        data.habitacionId = habitaciones._id;

        var fechaE = new Date(document.getElementById('fentrada').value);
        var fechaS = new Date(document.getElementById('fsalida').value);
        /*console.log('fecha entrada', fechaE);
        console.log('fecha salida', fechaS);*/
        var time = fechaS.getTime() - fechaE.getTime();
        //console.log(fechaE);
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        document.getElementById("cantidadNoches").value = days;

        var valorTotal = days * habitaciones.valornoche;
        document.getElementById("totalreserva").value = valorTotal;

        data.cantidadNoches = days;

        console.log(data.cantidadNoches);
        data.totalreserva = valorTotal;
        console.log(data.totalreserva);
    }


    return (
        <>
            <Card style={{ width: '20rem' }} key={habitaciones._id} className="list-rooms__card">
                <div className='container-image-room'>
                    <Card.Img variant="top" src={`https://app-hotelia3.herokuapp.com${habitaciones.img}`} />
                    <Card.Title className="list-rooms__cardTitle">{habitaciones.nombrehab}</Card.Title>

                    {/*<Card.Text className='card-admin__layer'>
                        <h2 className='no-disponible'>No disponible</h2>
                        <h2 className='en-mantenimiento'>En mantenimiento</h2>
                    </Card.Text>*/}
                </div>

                <Card.Body>
                    <Card.Text className='card-admin__description'>
                        <p className='list-rooms__cardPrice'>${habitaciones.valornoche} COP</p>
                        <p className='card-admin__description-text'>{habitaciones.descripcion}</p>
                        <div>
                            <p><strong>N° habitación:</strong> {habitaciones._id}</p>
                            <p><strong>Estado:</strong> {habitaciones.estado}</p>
                        </div>

                        <div className='card-admin__description-text'>
                            <p><i class="card-admin__description-icon fa-solid fa-bed"></i>: {habitaciones.camas}</p>
                            <p><i class="card-admin__description-icon fa-solid fa-users"></i>: {habitaciones.capacidad}</p>
                        </div>

                    </Card.Text>

                    <div className='list-rooms__buttons'>
                        <Button variant="secondary" className='list-rooms__cardButtonPrincipal' onClick={handleEdit}><i class="fa-solid fa-pen"></i>Datos</Button>
                        <Button variant="secondary" className='list-rooms__cardButtonPrincipal' onClick={handleEditState}><i class="fa-solid fa-pen"></i>Estado</Button>
                        {/*<Button variant="danger" onClick={handleDelete}>Eliminar</Button>*/}
                    </div>

                    <Button onClick={handleShow2} className='list-rooms__cardButtonSecondary hover-button'><i class="fa-solid fa-bell-concierge"></i>Reservar</Button>

                </Card.Body>
            </Card>

            <Modal
                show={show2}
                onHide={handleClose2}
            >
                <Modal.Header closeButton className='title-modalroom'>
                    <h4>{habitaciones.nombrehab}</h4>
                </Modal.Header>

                <Modal.Body className='row m-auto'>
                        
                        <img src={LogoHotelia} alt='logo-hotelia' className='log-modal-reserve-admin' />
                        
                        <form
                            onSubmit={handleSubmitA}>

                            <div className='modal-bookiing__admin'>
                            <Form.Group class="mb-3">
                                <Form.Label for='entrada'><strong>Entrada:</strong> </Form.Label>
                                <Form.Control
                                    id='fentrada'
                                    name='fentrada'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    data-mask required
                                    value={data.fentrada}
                                    className="modal-bookiing__admin-input"
                                />
                            </Form.Group>

                            <Form.Group class="mb-3">
                                <Form.Label for='salida'><strong>Salida:</strong> </Form.Label>
                                <Form.Control
                                    id='fsalida'
                                    name='fsalida'
                                    type='date'
                                    min={disableDate}
                                    //onChange={cantidadNoches}
                                    onChange={handleChangeA}
                                    onBlur={cantidadNoches}
                                    data-inputmask="'alias': 'yyyy/MM/dd'"
                                    value={data.fsalida}
                                    className="modal-bookiing__admin-input"
                                />
                            </Form.Group></div>
                            {/*<div className='input-fullname'>
                                <label>Nombre completo: </label>
                                <input
                                    name='userId'
                                    type='text'
                                    //value={values.fullname}
                                    //onBlur={handleBlur}
                                    max="10"
                                />
                                {/*{errors.fullname && <div className='error message-validate-reserve'>
                                            {errors.fullname}</div>}
                            </div>*/}
                            
                            <Form.Group class="mb-3">
                                <Form.Label><strong>No. Documento:</strong> </Form.Label>
                                <Form.Control
                                    id='userId'
                                    name='userId'
                                    type='text'
                                    value={data.userId}
                                    onChange={handleChangeA}
                                //value={values.doc}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}
                            </Form.Group>
                            
                            <div className='modal-bookiing__admin'>
                            <Form.Group class="mb-3">
                                <Form.Label><strong>Habitación:</strong> </Form.Label>
                                <Form.Control
                                    id='habitacionId'
                                    name='habitacionId'
                                    type='text'
                                    value={data.habitacionId}
                                    onChange={handleChangeA}
                                    //value={values.doc}
                                    //onBlur={handleBlur}
                                    max="10"
                                    className="modal-bookiing__admin-input"
                                    disabled
                                />

                                {/*{errors.doc && <div className='error message-validate-reserve'>
                                            {errors.doc}</div>}*/}
                            </Form.Group>
                            
                            <Form.Group class="mb-3">
                                <Form.Label><strong>Cantidad de noches:</strong> </Form.Label>
                                <Form.Control
                                    id='cantidadNoches'
                                    name='cantidadNoches'
                                    type='number'
                                    value={data.cantidadNoches}
                                    onChange={handleChangeA}
                                    className="modal-bookiing__admin-input"
                                    disabled
                                //onChange={handleChange}
                                //onBlur={handleBlur}
                                />

                                {/*{errors.cantnoches && <div className='error message-validate-reserve'>
                                            {errors.cantnoches}</div>}*/}
                            </Form.Group>
                            </div>
                            
                            <span className='total-nigth m-auto pt-4 pb-3'><Form.Label><strong>VALOR TOTAL</strong> </Form.Label></span>
                            <Form.Control className='text-value-nigth m-auto mt-1 mb-1'
                                id='totalreserva'
                                name='totalreserva'
                                type='text'
                                placeholder='$'
                                onChange={handleChangeA}
                                value={data.totalreserva}
                                disabled />

                            <button className='card-admin__cardButtonPrincipal confirm-button__admin mt-4' type='submit'>Guardar reserva</button>

                        </form>

                    </Modal.Body>

                    <Modal.Footer className='footer'>
                            <button className='card-admin__cardButtonSecondary cancel-button__admin' onClick={handleClose2}>Cancelar</button>
                            {/*<button className='card-admin__cardButtonPrincipal' type="submit">Guardar reserva</button>*/}
                    </Modal.Footer>

            </Modal>
        </>
    );
}

export default CardRoom;