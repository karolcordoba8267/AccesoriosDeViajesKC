import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer">
                    <ul class="footerUL">
                        <li class="footerLi"><a href="#"><i
                            class="fa-brands fa-facebook"></i></a></li>
                        <li class="footerLi"><a href="#"><i
                            class="fa-brands fa-square-instagram"></i></a></li>
                        <li class="footerLi"><a href="#"><i
                            class="fa-brands fa-twitter"></i></a></li>
                        <li class="footerLi"><a href="#"><i
                            class="fa-solid fa-envelope"></i></a></li>
                    </ul>
                    <p>&copy;2021 KJ ~ CS | Todos los derechos
                        reservados</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
