import React, { useState } from "react";
import './Navbar3.css'
import logo from '../Assets/avion.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar3 = () => {

    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">

            <ul class="ul">
                <li class="li">
                    <img src={logo} alt="Logo"
                        style={{ width: '60px', height: "40px" }} />
                </li>
                <li className="li" onClick={() => { setMenu("inicio") }}><Link style={menu === "inicio" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/'><FontAwesomeIcon icon={faHouse} /> Inicio</Link>   </li>
                <li className="li" onClick={() => { setMenu("comprar") }}><Link style={menu === "comprar" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/comprar'> <FontAwesomeIcon icon={faShop} /> Comprar</Link></li>
                <li className="li" onClick={() => { setMenu("contactanos") }}><Link style={menu === "contactanos" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/contactanos'><FontAwesomeIcon icon={faEnvelope} /> Contactanos</Link>  </li>
                <li className="li" onClick={() => { setMenu("blog") }}> <Link style={menu === "blog" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/blog'><FontAwesomeIcon icon={faNewspaper} /> Blog</Link> </li>
                <li className="li" onClick={() => { setMenu("sobrenosotros") }}> <Link style={menu === "sobrenosotros" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/sobrenosotros'><FontAwesomeIcon icon={faUsers} /> Sobre Nosotros</Link> </li>
                <li className="li" id="inicioSesion" onClick={() => { setMenu("Login") }}><Link style={menu === "Login" ? { backgroundColor: 'antiquewhite', color: '#111' } : {}} to='/login'><FontAwesomeIcon icon={faUser} /> Login</Link>  </li>
                <li className="nav-login-cart" id="inicioSesion">
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">0</div>
                </li>

            </ul>
        </div >
    )
}

export default Navbar3