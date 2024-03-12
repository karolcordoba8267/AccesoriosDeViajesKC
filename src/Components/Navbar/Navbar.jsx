import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/avion.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>KJ~CS</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("comprar") }}><Link style={{ textDecoration: 'none' }} to='/'>Comprar</Link>  {menu === "comprar" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("primavera") }}><Link style={{ textDecoration: 'none' }} to='/primavera'>Primavera</Link>  {menu === "primavera" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("invierno") }}> <Link style={{ textDecoration: 'none' }} to='/invierno'>Invierno</Link> {menu === "invierno" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("otoño") }}> <Link style={{ textDecoration: 'none' }} to='/otoño'>Otoño</Link> {menu === "otoño" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("verano") }}><Link style={{ textDecoration: 'none' }} to='/verano'>Verano</Link> {menu === "verano" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'> <button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar