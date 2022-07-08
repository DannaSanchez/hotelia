import "../formHuesped/FormHuesped.css"
import "./EditarUsuario.css"
import {Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';
import usuariofoto from "./usuario-foto.png"
function EditarUsuario (){
    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="editUsuario-background">
            <div className="huesped">
                <div className="navbar-falsa"></div>
                <div className="formhuesped-background">
                <div className="form-editarusuario">
                    <h1>Bienvenido, Angie Vargas</h1>
                    <div className="editarusuario-display">
                    <div className="editarusuario-edit">
                        <img src={usuariofoto} />
                        <div className="cambiar-foto-editarusuario"><i class="fa-solid fa-upload"></i></div>
                        <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow}>Cambiar Contraseña</Button>
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
                    <formulario  action="">
                        <div className="formhuesped">
                        <div>
                            <label>Tipo de documento</label>
                            <select name="tipo" id="tipo">
                                <option value="CC">Cédula de Ciudadanía</option>
                                <option value="TI">Tarjeta de Identidad</option>
                                <option value="CE">Cédula de Extranjería</option>
                                <option value="PS">Pasaporte</option>     
                            </select>
                        </div>
                        <div>
                            <label>Número de documento</label>
                            <input
                                className="formhuesped-input"
                                type="number"
                                name="numdoc"
                                placeholder="12504673"
                            />
                        </div>
                        <div>
                            <label>Nombres</label>
                            <input
                                className="formhuesped-input"
                                type="text"
                                name="nombres"
                                placeholder="Angie Paola"
                            />
                        </div>
                        <div>
                            <label>Apellidos</label>
                            <input
                                className="formhuesped-input"
                                type="text"
                                name="apellidos"
                                placeholder="Vargas Romero"
                            />
                        </div>
                        <div>
                            <label>Fecha nacimiento</label>
                            <input
                                className="formhuesped-input"
                                type="text"
                                name="date"
                                placeholder="01/06/1986"
                            />
                        </div>
                        <div>
                        <label>País de origen  </label>
                            <select name="pais">
                                <option value="AF">Colombia</option>
                            </select>
                        </div>
                        <div>
                            <label>Género</label><br/>
                            <div className="formhuesped-group-radio">
                            <div><input className="formhuesped-radio" checked type= "radio" name="sexo"/>femenino</div> 
                            <div><input className="formhuesped-radio" type= "radio" name="sexo"/>masculino</div> 
                            <div><input className="formhuesped-radio" type= "radio" name="sexo"/>Otro</div> 
                            </div>
                        </div>
                        <div>
                            <label>Email </label>
                            <input
                                className="formhuesped-input"
                                type="text"
                                name="email"
                                placeholder="angievargas@gmail.com"
                            />
                        </div>
                        <div>
                            <label>Teléfono </label>
                            <input
                                className="formhuesped-input"
                                type="number"
                                name="telefono"
                                placeholder="12504673"
                            />
                        </div>
                        </div>
                        <Button className="formhuesped-modal-button m-auto" variant="secondary">Actualizar Datos</Button>
                    </formulario>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditarUsuario