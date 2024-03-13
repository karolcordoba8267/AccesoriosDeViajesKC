import React, { useState } from 'react';
import './Login.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'karolc' && password === '1234') {
            alert('Inicio de sesión exitoso!');
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className='container'>
            <div style={{ padding: '20px', marginTop: '20px', border: '1px solid black', borderRadius: '10px', backgroundColor: 'lightblue' }}>
                <div className="login-form" style={{ border: '1px solid black' }}>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <label style={{ fontFamily: 'Raleway, sans-serif' }} htmlFor="username">Nombre de usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Ingrese su nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label style={{ fontFamily: 'Raleway, sans-serif' }} htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a style={{ fontFamily: 'Raleway, sans-serif' }} href="#">¿Olvidó su contraseña?</a>
                        <button style={{ fontFamily: 'Raleway, sans-serif' }} type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
