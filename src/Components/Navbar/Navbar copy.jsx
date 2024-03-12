import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/avion.png'
import cart_icon from '../Assets/cart-icon.png'
import { Link } from "react-router-dom";


const NavbarCopy = () => {

    const [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>KJ~CS</p>
            </div>
            <ul className="ul">
                <li className="li" onClick={() => { setMenu("comprar") }}><Link className="a" to='/'>Comprar</Link> {menu === "comprar" ? <hr /> : <></>}</li>
                <li className="li" onClick={() => { setMenu("primavera") }}><Link className="a" to='/primavera'>Primavera</Link> {menu === "primavera" ? <hr /> : <></>}</li>
                <li className="li" onClick={() => { setMenu("invierno") }}><Link className="a" to='/invierno'>Invierno</Link> {menu === "invierno" ? <hr /> : <></>}</li>
                <li className="li" onClick={() => { setMenu("otoño") }}><Link className="a" to='/otoño'>Otoño</Link> {menu === "otoño" ? <hr /> : <></>}</li>
                <li className="li" onClick={() => { setMenu("verano") }}><Link className="a" to='/verano'>Verano</Link> {menu === "verano" ? <hr /> : <></>}</li>
            
            
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className="a">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className="logoImg" /></Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default NavbarCopy