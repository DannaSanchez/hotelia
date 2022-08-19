import './Sidebar.css';
import iconologo from '../../img/icono-logo.svg';
import logoh from '../../img/logosvg.svg';
import foto from '../../img/foto-usuario.jpeg';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SidebarHuesped() {
    const url = "https://app-hotelia3.herokuapp.com/users/1254784102";
    const getData = async () => {
        const response = axios.get(url);
        return response;
    };
    const [list, setList] = useState([]);
    const [upList, setUplist] = useState([false]);
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    return (
        <nav className='sidebar'>
            <div className="top-nav">
                <img src={iconologo} alt='logo-hotelia' className='logo-nav' />
                <img src={logoh} alt='logo-hotelia' className='logo-nav2' />
                <div className='cont-topnav'>
                    <img src={foto} alt='foto-user' className='img-user' />
                    <div className='text-topnav'>
                        <p className='user'>{list.apellido}</p>
                        <p className='email-user'>{list.email} </p>
                    </div>
                </div>
            </div>
            <div className='center-nav'>
                <a className='item-sidenav' href='/habitaciones-huesped'>
                    <i className="fa-solid fa-bed"></i>
                    <p className='item-sidenav2 pt-4'>Habitaciones</p>
                </a>
                <a className='item-sidenav' href='/reservas-huesped'>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p className='item-sidenav2 pt-4'>Mis Reservas</p>
                </a>
                <a className='item-sidenav' href='/editarperfil'>
                    <i className="fa-solid fa-user-pen"></i>
                    <p className='item-sidenav2 pt-4'>Ver Perfil</p>
                </a>
            </div>
            <button className='final-nav'>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Cerrar sesión</p>
            </button>
        </nav>
    );
}
export default SidebarHuesped;