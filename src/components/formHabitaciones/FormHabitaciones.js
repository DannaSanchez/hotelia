import { Formik } from 'formik';
import './FormHabitaciones.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardRoom from '../cardRoom/CardRoom';


function FormHabitaciones() {

    const disableDate = new Date().toISOString().slice(0, 10);

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "https://app-hotelia3.herokuapp.com/habitaciones";
    /*2.Generar fución asincrona*/
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. UseState para guardar la respuesta de la petición*/
    const [list, setList] = useState([]);
    /*5.Crear otro estado para refrescar el listado despues de eliminar*/
    const [upList, setUplist] = useState([false]);


    /*4.Hook useEfect ejecuta funciones cada vez que renderizamos un componente*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log([list]);

    return (

        <div className='cont-habitaciones'>
            <div>
                <div className='title-room'>
                    <h4>Busqueda de Habitaciones</h4>
                </div>
                <div className='box-form'>
                    <Formik

                        initialValues={{
                            numadultos: '0',
                            numninos: '0'
                        }}

                        validate={(valores) => {
                            let errores = {};

                            //Validación cantidad adultos
                            if (!/^[0-9]{1,2}$/.test(valores.numadultos)) {
                                errores.numadultos = 'Ingrese la cantidad adultos'
                            }
                            else if (!/^[0-9]{1,2}$/.test(valores.numninos)) {
                                errores.numninos = 'Ingrese la cantidad de niños'
                            } else if (valores.numadultos > 10) {
                                errores.numadultos = 'Elige la cantidad entre 1 a 10 adultos'
                            } else if (valores.numninos > 10) {
                                errores.numninos = 'Elige la cantidad entre 1 a 10 niños'
                            }
                            return errores;
                        }
                        }

                        onSubmit={() => {
                            console.log("enviado");
                        }}

                    >
                        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
                            <form className='cont-form-room' onSubmit={handleSubmit}>
                                <div className='cont-entrada'>
                                    <label for='entrada'>Entrada: </label>
                                    <input
                                        name='entrada'
                                        type='date'
                                        min={disableDate}
                                    />
                                </div>
                                <div className='cont-salida'>
                                    <label for='salida'>Salida: </label>
                                    <input
                                        name='salida'
                                        type='date'
                                        min={disableDate}
                                    />
                                </div>
                                <div className='input-adultos'>
                                    <label>Adultos: </label>
                                    <input
                                        name='numadultos'
                                        type='number'
                                        value={values.numadultos}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        max="10"
                                    />

                                    {errors.numadultos && <div className='error message-validate'>{errors.numadultos}</div>}

                                </div>
                                <div className='input-ninos'>
                                    <label>Niños: </label>
                                    <input
                                        name='numninos'
                                        type='number'
                                        value={values.numninos}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        max="10"
                                    />

                                    {errors.numninos && <div className='error message-validate'>{errors.numninos}</div>}

                                </div>
                                <button type='submit' className='item-ver'>
                                    Ver habitaciones disponibles
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className='cont-cards'>
                {
                    list.map((es, index) => (
                        <CardRoom
                            key={index}
                            habitaciones={es}
                            setUplist={setUplist}
                            upList={upList}
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default FormHabitaciones;