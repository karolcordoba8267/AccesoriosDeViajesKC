import React from 'react'
import './Login.css'
import { validarCredenciales } from "./Login";

const IniciarSesion = () => {
    return (
        <div>
            <div className='container'>
                <br /><br />
                <div style={{ padding: '20px', border: '1px solid black', borderRadius: '10px', backgroundColor: 'lightblue' }}>
                    <div className="login-form" style={{ border: '1px solid black' }}>
                        <h1>Iniciar Sesión</h1>
                        <form id="loginForm" action="/submit" method="post">
                            <label style={{ fontFamily: 'Raleway, sans-serif' }} htmlFor="username">Nombre de usuario</label>
                            <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" />
                            <label style={{ fontFamily: 'Raleway, sans-serif' }} htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
                            <a style={{ fontFamily: 'Raleway, sans-serif' }} href="#">¿Olvidó su contraseña?</a>
                            <button style={{ fontFamily: 'Raleway, sans-serif' }} type="button" onClick={validarCredenciales}>Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IniciarSesion;
