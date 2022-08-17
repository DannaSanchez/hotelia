import "../formHuesped/FormHuesped.css"
import axios from "axios"
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Foto from "./foto.js"
import "./EditarUsuario.css"

function PerfilUsuario() {
    //modal
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    //validaciones
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
    const url = "https://app-hotelia3.herokuapp.com/users/1254784102";
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };
    const [list, setList] = useState([]);
    const [upList, setUplist] = useState([false]);
    const [dataModal, setDataModal] = useState({})
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    return (
        <div className="editUsuario-background">
            <div className="editarusuario-fondo">
                <div className="formeditUsuario-background">
                    <h1>Bienvenido, {list.nombre} {list.apellido}</h1>
                    <div className="editarusuario-display">
                        <div className="editarusuario-edit">
                            <Foto
                                img={`https://app-hotelia3.herokuapp.com${list.img}`}
                                descf={"foto de "+list.nombre}
                                estadof={dataModal.img}
                            />
                            <div className="boton-cambiardatos">
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow}>Cambiar Contraseña</Button>
                                <Button className="cambiarcontraseña-boton" variant="secondary" onClick={handleShow2}>Actualizar Datos</Button>
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                actual: '',
                                password: '',
                                newAgainC: ''
                            }}
                            validate={(valores) => {
                                let errores = {};
                                // Validacion contraseña "actual"
                                if (!valores.actual) {
                                    errores.actual = 'Por favor ingresa su contraseña actual'
                                } else if (valores.actual !== list.password) {
                                    errores.actual = 'Contraseña incorrecta'
                                }
                                // Validacion password
                                if (!valores.password) {
                                    errores.password = 'Por favor ingresa un nueva contraseña'
                                } else if (!/^[A-Za-z\d$@$!%*?&]{8,15}$/.test(valores.password)) {
                                    errores.password = 'Digite una contraseña valida'
                                }
                                // Validacion newAgainC
                                if (!valores.newAgainC) {
                                    errores.newAgainC = 'La contraseña no coincide'
                                }
                                else if (valores.newAgainC !== valores.password) {
                                    errores.newAgainC = "La contraseña no coincide"
                                }
                                return errores;
                            }}
                            onSubmit={async (valores, { resetForm }) => {
                                resetForm();
                                console.log(valores);
                                const response = await axios.put(`${url}`, valores);
                                if (response.status === 200) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Cambios Guardados',
                                        html: "Sus datos han sido actualizados exitosamente!",
                                        confirmButtonColor: "#9C2759",
                                        background: '#FFFDFB',
                                        color: '#000'
                                    })
                                    handleClose();
                                    setUplist(!upList);
                                    setTimeout(() => window.location.replace('/login'), 2000);
                                }
                                else {
                                    Swal.fire(
                                        'Error!',
                                        'Hubo un problema al actualizar los datos!',
                                        'error'
                                    )
                                }
                            }}
                        >
                            {({ errors }) => (
                                <Modal className="formhuesped-modal form-editarusuario-modal" show={show} onHide={handleClose}>
                                    <Modal.Header className="modal-header p-auto" closeButton>
                                        <Modal.Title><h1 className="text-center">Cambiar Contraseña</h1></Modal.Title>
                                    </Modal.Header>
                                    <Form>
                                        <Modal.Body>
                                            <div>
                                                <label>Digite la Contraseña Actual</label>
                                                <Field
                                                    className="formhuesped-input"
                                                    type="password"
                                                    name="actual"
                                                    id="actual"
                                                //value={list.password}
                                                />
                                            </div>
                                            <ErrorMessage name="actual" component={() => (<div className="error">{errors.actual}</div>)} />
                                            <div>
                                                <label>Contraseña Nueva </label>
                                                <Field
                                                    className="formhuesped-input"
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                //value={dataModal.password}
                                                />
                                            </div>
                                            <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                                            <div>
                                                <label>Confirmar Contraseña</label>
                                                <Field
                                                    className="formhuesped-input"
                                                    type="password"
                                                    name="newAgainC"
                                                    id="newAgainC"
                                                />
                                            </div>
                                            <ErrorMessage name="newAgainC" component={() => (<div className="error">{errors.newAgainC}</div>)} />
                                            {formularioEnviado && <p className="exito">Contraseña cambiada con exito!</p>}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                                            <Button className=" editar-usuario-primary" type="submit">Cambiar Contraseña</Button>
                                        </Modal.Footer>
                                    </Form>
                                </Modal>
                            )}
                        </Formik>
                        <Formik
                            initialValues={{
                                email: ' ',
                                telefono: ''
                            }}
                            validate={(valores) => {
                                let errores = {};
                                // Validacion contraseña "email"
                                if (!valores.email) {
                                    errores.email = 'Por favor ingresa un correo electronico'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                    errores.email = 'Digite un correo valido. ej: intento@gmail.com.'
                                }
                                // Validacion telefono
                                if (!valores.telefono) {
                                    errores.telefono = 'Por favor ingresa un número de teléfono'
                                } else if (!/^[0-9]{10,11}$/.test(valores.telefono)) {
                                    errores.telefono = 'Digite un teléfono valido'
                                }
                                return errores;
                            }}
                            onSubmit={async (valores, { resetForm }) => {
                                resetForm();
                                console.log(valores);
                                const response = await axios.put(`${url}`, valores);
                                if (response.status === 200) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Cambios Guardados',
                                        html: "Sus datos han sido actualizados exitosamente!",
                                        confirmButtonColor: "#9C2759",
                                        background: '#FFFDFB',
                                        color: '#000'
                                    })
                                    handleClose2();
                                    setUplist(!upList);
                                }
                                else {
                                    Swal.fire(
                                        'Error!',
                                        'Hubo un problema al actualizar los datos!',
                                        'error'
                                    )
                                }
                            }}
                        >
                            {({ errors }) => (

                                <Modal className="formhuesped-modal form-editarusuario-modal" show={show2} onHide={handleClose2}>
                                    <Modal.Header className="modal-header p-auto" closeButton>
                                        <Modal.Title><h1 className="text-center">Actualizar Datos de Contacto</h1></Modal.Title>
                                    </Modal.Header>
                                    <Form>

                                        <Modal.Body>
                                            <div>
                                                <label>Email</label>
                                                <Field
                                                    className="formhuesped-input"
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder={list.email}
                                                />
                                            </div>
                                            <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                                            <div>
                                                <label>Teléfono</label>
                                                <Field
                                                    className="formhuesped-input"
                                                    type="number"
                                                    name="telefono"
                                                    id="telefono"
                                                    placeholder={list.telefono}
                                                />
                                            </div>
                                            <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                                            {formularioEnviado && <p className="exito">Datos actualizados</p>}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
                                            <Button className=" editar-usuario-primary" type="submit">Actualizar datos</Button>
                                        </Modal.Footer>
                                    </Form>
                                </Modal>
                            )}
                        </Formik>

                        <div className="formhuesped" key={list._id}>
                            <div>
                                <h4>Tipo de documento:</h4>
                                <h6>{list.tipodoc}</h6>
                            </div>
                            <div>
                                <h4>Número de documento:</h4>
                                <h6>{list._id}</h6>
                            </div>
                            <div>
                                <h4>Nombres:</h4>
                                <h6>{list.nombre}</h6>
                            </div>
                            <div>
                                <h4>Apellidos:</h4>
                                <h6>{list.apellido}</h6>
                            </div>
                            <div>
                                <h4>Fecha nacimiento:</h4>
                                <h6>{list.fnacimiento}</h6>
                            </div>
                            <div>
                                <h4>País de origen: </h4>
                                <h6>{list.paisorigen}</h6>
                            </div>
                            <div>
                                <h4>Género:</h4>
                                <h6>{list.genero}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PerfilUsuario