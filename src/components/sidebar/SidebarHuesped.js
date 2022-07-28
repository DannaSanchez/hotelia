import './Sidebar.css';
import iconologo from '../../img/icono-logo.svg';
import logoh from '../../img/logosvg.svg';
import foto from '../../img/img-user.svg';
import { Link } from 'react-router-dom';

function SidebarHuesped() {

        return (
        <nav className='sidebar'>
            <div className="top-nav">
                <img src={iconologo} alt='logo-hotelia' className='logo-nav' />
                <img src={logoh} alt='logo-hotelia' className='logo-nav2' />
                <div className='cont-topnav'>
                    <img src={foto} alt='foto-user' className='img-user' />
                    <div className='text-topnav'>
                        <p className='user'>Alejandra Vargas</p>
                        <p className='email-user'>angievargas2@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='center-nav'>
                <div className='item-sidenav'>
                    <i className="fa-solid fa-bed"></i>
                    <Link to="/habitaciones-huesped" className="item-sidenav2">Habitaciones</Link>
                </div>
                <div className='item-sidenav'>
                <i className="fa-solid fa-calendar-days"></i>
                    <Link to="/reservas-huesped" className="item-sidenav2">Mis Reservas</Link>
                </div>
                <div className='item-sidenav'>
                <i className="fa-solid fa-user-pen"></i>
                    <Link to="/editarperfil" className="item-sidenav2">Ver Perfil</Link>
                </div>
            </div>
            <button className='final-nav'>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Cerrar sesión</p>
            </button>
        </nav>
    );
}
export default SidebarHuesped;