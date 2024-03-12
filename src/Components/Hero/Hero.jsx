import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import perfil1 from '../Assets/perfil1.png'
import perfil2 from '../Assets/perfil2.png'
import perfil3 from '../Assets/perfil3.png'
import perfil4 from '../Assets/perfil4.png'
import perfil5 from '../Assets/perfil5.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div class="contenedor">
                <div className="inicio">
                    <div className="bannerInicial">
                        <p style={{ fontFamily: 'Raleway', display: 'inline', fontWeight: 'bold', fontSize: '50px' }}>¡<span style={{ color: 'black' }}>Viaja</span> con </p>
                        <p style={{ fontFamily: 'Pacifico', color: 'lightblue', display: 'inline', fontWeight: 'bold', fontSize: '50px' }}>estilo y comodidad!</p>
                        <p style={{ fontFamily: 'Raleway', fontSize: '20px', fontWeight: 'bold', fontSize: '25px' }}>Descubre nuestra amplia gama de <span style={{ color: 'lightblue', WebkitTextStroke: '1px black' }}>accesorios</span> para <span style={{ color: 'lightblue', WebkitTextStroke: '1px black' }}>viajes</span>.</p>
                    </div>
                </div>

                <div class="Favoritos">
                    <div className="bannerFavoritos">
                        <p style={{ fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '30px' }}>Los favoritos del <span style={{ color: 'lightblue', fontFamily: 'Pacifico', fontSize: '40px', WebkitTextStroke: '1px black' }}>mes</span></p>
                    </div>

                    {/* Cuadrícula de productos favoritos */}
                    <div className="grid-container">
                        <div className="grid-item1"><a className="button1" style={{ fontSize: '30px' }} href="#gafas"><i className="fa-solid fa-crown" style={{ color: '#FFD43B' }}></i> Gafas de sol polarizadas <i className="fa-solid fa-crown" style={{ color: '#FFD43B' }}></i></a></div>
                        <div className="grid-item"><a className="button" href="#almohadillas">Almohadillas para Dormir con Memory Foam</a></div>
                        <div className="grid-item"><a className="button" href="#tapaoidos">Tapaoidos de Silicona Suave</a></div>
                        <div className="grid-item"><a className="button" href="#mochila">Mochila de Viaje Resistente al Agua</a></div>
                        <div className="grid-item"><a className="button" href="#adaptador">Adaptador Universal para Enchufes</a></div>
                        <div className="grid-item"><a className="button" href="#botella">Botella de Agua Plegable</a></div>
                        <div className="grid-item"><a className="button" href="#candado">Candado TSA para Equipaje</a></div>
                        <div className="grid-item"><a className="button" href="#organizador">Organizador de Cables y Accesorios Electrónicos</a></div>
                        <div className="grid-item"><a className="button" href="#cargador">Cargador Portátil (Power Bank)</a></div>
                        <div className="grid-item"><a className="button" href="#linterna">Linterna Frontal Recargable</a></div>
                    </div>
                </div>

                <div className="Reseñas">
                    {/* Banner de reseñas */}
                    <div className="bannerReseñas">
                        <p style={{ fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '30px' }}>Lo que dicen nuestros <span style={{ color: 'pink', fontFamily: 'Pacifico', fontSize: '40px', WebkitTextStroke: '1px black' }}>clientes</span></p>
                    </div>

                    {/* Galería de reseñas */}
                    <div className="GridReseñas">
                        <div className="gallery">
                            <img className="imgResenas" src={perfil1} alt="Cinque Terre" />
                            <div className="desc1" style={{ border: '1px solid rgba(0, 0, 0, 0.8)' }}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            </div>
                            <div className="desc"><p>"Increíble variedad de accesorios. ¡Compra en línea sin complicaciones!"</p></div>
                        </div>
                        <div className="gallery">
                            <img className="imgResenas" src={perfil2} alt="Cinque Terre" />
                            <div className="desc1" style={{ border: '1px solid rgba(0, 0, 0, 0.8)' }}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            </div>
                            <div className="desc"><p>"Productos útiles, sitio fácil de usar. Entrega puntual."</p></div>
                        </div>
                        <div className="gallery">
                            <img className="imgResenas" src={perfil3} alt="Cinque Terre" />
                            <div className="desc1" style={{ border: '1px solid rgba(0, 0, 0, 0.8)' }}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            </div>
                            <div className="desc"><p>"Excelente servicio y productos. ¡Mis accesorios de viaje favoritos!"</p></div>
                        </div>
                        <div className="gallery">
                            <img className="imgResenas" src={perfil4} alt="Cinque Terre" />
                            <div className="desc1" style={{ border: '1px solid rgba(0, 0, 0, 0.8)' }}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            </div>
                            <div className="desc"><p>"Compra en línea fácil y entrega rápida. ¡Accesorios de viaje de calidad!"</p></div>
                        </div>
                        <div className="gallery">
                            <img className="imgResenas" src={perfil5} alt="Cinque Terre" />
                            <div className="desc1" style={{ border: '1px solid rgba(0, 0, 0, 0.8)' }}>
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
                            </div>
                            <div className="desc"><p>"Buena tienda en línea para accesorios de viaje. Envío rápido."</p></div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero
