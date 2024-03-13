import React, { useEffect } from 'react';
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import './ComprasSlide.css'

const ComprasSlide = () => {
    let slideIndex = 1;

    useEffect(() => {
        // Mostrar las diapositivas
        showSlides(slideIndex);

        // Establecer intervalo para llamar a autoSlides cada 5000 milisegundos (ajustar según sea necesario)
        const interval = setInterval(autoSlides, 5000);

        // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
        return () => clearInterval(interval);
    }, []); // El segundo parámetro vacío [] indica que este efecto se ejecutará solo una vez al montar el componente

    // Controles de siguiente/anterior
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Controles de imagen en miniatura
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Presentación de diapositivas automática
    function autoSlides() {
        plusSlides(1);
    }

    // Función para mostrar las diapositivas
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        // Verificar límites de índice
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        // Ocultar todas las diapositivas
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Quitar la clase "activeDot" de todos los puntos de navegación
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activeDot", "");
        }

        // Mostrar la diapositiva actual y resaltar el punto de navegación correspondiente
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " activeDot";
    }

    return (
        <div className='contenedor'>
            <div style={{ padding: '10px', border: '1px solid black', backgroundColor: '#FFD43B' }}>
                <div className="slideshow-container" style={{ backgroundColor: 'white' }}>
                    <div className="mySlides">
                        <img className="imgSlides" src={img4} alt="Slide 1" />
                    </div>
                    <div className="mySlides">
                        <img className="imgSlides" src={img5} alt="Slide 2" />
                    </div>
                    <div className="mySlides">
                        <img className="imgSlides" src={img6} alt="Slide 3" />
                    </div>
                    <br />
                    {/* Puntos/círculos */}
                    <div style={{ textAlign: 'center' }}>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprasSlide
