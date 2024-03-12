import React, { useState } from "react";
import './Navbar2.css'
import logo from '../Assets/avion.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



const NavbarCopy = () => {

    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li className="nav-logo">
                    <img src={logo} alt="" />
                    <p>KJ~CS</p>
                </li>

                <li className="li" onClick={() => { setMenu("comprar") }}><Link style={{ textDecoration: 'none' }} to='/'> <FontAwesomeIcon icon={faCoffee} />Comprar</Link></li>
                <li className="li" onClick={() => { setMenu("primavera") }}><Link style={{ textDecoration: 'none' }} to='/primavera'>Primavera</Link>  </li>
                <li className="li" onClick={() => { setMenu("invierno") }}> <Link style={{ textDecoration: 'none' }} to='/invierno'>Invierno</Link> </li>
                <li className="li" onClick={() => { setMenu("otoño") }}> <Link style={{ textDecoration: 'none' }} to='/otoño'>Otoño</Link> </li>
                <li className="li" onClick={() => { setMenu("verano") }}><Link style={{ textDecoration: 'none' }} to='/verano'>Verano</Link> </li>
                <li className="li" id="inicioSesion" onClick={() => { setMenu("Login") }}><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link>  </li>
                <li className="nav-login-cart" id="inicioSesion">
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">0</div>
                </li>
            </ul >
        </div >
    )
}

export default NavbarCopy