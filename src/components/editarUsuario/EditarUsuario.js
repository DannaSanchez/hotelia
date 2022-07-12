import "../formHuesped/FormHuesped.css"
import "./EditarUsuario.css"
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import usuariofoto from "./usuario-foto.png"
function EditarUsuario() {
    //modal
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <div className="editUsuario-background">
            <div className="editarusuario-fondo">
                
                <div className="formeditUsuario-background">
                    <h1>Bienvenido, Angie Vargas</h1>
                    <div className="editarusuario-display">
                        <div className="editarusuario-edit">
                            <div>
                                <img src={usuariofoto} />   
                            <div class="contenedor-cambiar-foto">
                            <button class="cambiar-foto-editarusuario"><i class="fa-solid fa-upload"></i></button>
                            <input type="file" name="myfile" className="formhuesped-image"  accept=".jpg,.png" />
                            </div></div>
                            <div className="boton-cambiardatos">
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow}>Cambiar Contraseña</Button>
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow2}>Actualizar Datos</Button>
                            </div>
                        </div>
                        <Modal className="formhuesped-modal form-editarusuario-modal" show={show} onHide={handleClose}>
                            <Modal.Header className="modal-header p-auto">
                                <Modal.Title><h1 className="text-center">Cambiar Contraseña</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body><div>
                                <label>Digite la Contraseña Actual</label>
                                <input
                                    className="formhuesped-input"
                                    type="text"
                                    name="contraseña"
                                />
                            </div>
                                <div>
                                    <label>Contraseña Nueva </label>
                                    <input
                                        className="formhuesped-input"
                                        type="text"
                                        name="confcontraseña"
                                    />
                                </div>
                                <div>
                                    <label>Confirmar Contraseña</label>
                                    <input
                                        className="formhuesped-input"
                                        type="text"
                                        name="confcontraseña"
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                                <Button className=" editar-usuario-primary" onClick={handleClose}>Cambiar Contraseña</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal className="formhuesped-modal form-editarusuario-modal" show={show2} onHide={handleClose2}>
                            <Modal.Header className="modal-header p-auto">
                                <Modal.Title><h1 className="text-center">Actualizar Datos de Contacto</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <label>Email</label>
                                    <input
                                        className="formhuesped-input"
                                        type="text"
                                        name="email"
                                        placeholder="angievargas@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label>Teléfono</label>
                                    <input
                                        className="formhuesped-input"
                                        type="number"
                                        name="telefono"
                                        placeholder="12504673"
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
                                <Button className=" editar-usuario-primary" onClick={handleClose2}>Cambiar Contraseña</Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="formhuesped">
                            <div>
                                <h4>Tipo de documento:</h4>
                                <h6>Cédula de Ciudadanía</h6>
                            </div>
                            <div>
                                <h4>Número de documento:</h4>
                                <h6>12504623</h6>
                            </div>
                            <div>
                                <h4>Nombres:</h4>
                                <h6>Angie Paola</h6>
                            </div>
                            <div>
                                <h4>Apellidos:</h4>
                                <h6>Vargas Romero</h6>
                            </div>
                            <div>
                                <h4>Fecha nacimiento:</h4>
                                <h6>01/06/1986</h6>
                            </div>
                            <div>
                                <h4>País de origen: </h4>
                                <h6>Colombia</h6>
                            </div>
                            <div>
                                <h4>Género:</h4>
                                <h6>femenino</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditarUsuario