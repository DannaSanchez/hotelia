import NavBar from "../components/navbar/Navbar";
import Slide from "../components/index/slide/Slide";
import Opinion from "../components/index/opiniones/Opinion";
import '../components/index/Inicio.css';

import LogoHotelia from '../img/logo.png'

function Inicio (){
    return(
        <>
            <NavBar />
            <Slide />
            <section className="index__description">
                <p>
                Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de lujo donde interactúan los negocios, el ocio y el descanso, gracias a su estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros comerciales, almacenes de lujo y emblemáticos parques para aprovechar la naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño, ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.
                </p>
                <img src={LogoHotelia} alt="Logo Hotelia"/>
            </section>

            <section className="index__features">
                <h2 className="index__features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
                <div className="index__features-description">
                    <div className="index__feature index__feature-blue">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-black">
                        <i class="fa-solid fa-bed"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-blue">
                        <i class="fa-solid fa-wifi"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="index__feature index__feature-black">
                        <i class="fa-solid fa-dumbbell"></i>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </section>

            <section className="index__ubication">
                <strong><h1>Ubícanos</h1></strong>
                <h4 className="index__ubication-subtitle subtitle__direction ">AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</h4>
                <h4 className="index__ubication-subtitle">+57 601 4567899</h4>
            </section>

            <section className="index__opinion">
                <h1 className="index__opinion-title">Nuestros usuarios dicen</h1>
                <Opinion />
            </section>
        </>
    );
}

export default Inicio;