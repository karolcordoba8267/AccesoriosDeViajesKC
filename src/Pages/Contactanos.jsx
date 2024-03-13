import React from 'react'
import Footer from '../Components/Hero/Footer';

const Contactanos = () => {
    return (
        <div>
            <div style={{ display: 'flex', padding: '5%', margin: '10px' }}>
                {/* Columna de Información de contacto */}
                <div style={{ flex: 1 }}>
                    <h2>Información de contacto:</h2>
                    <h3>Sede principal:</h3>
                    <p>Dirección: Calle Principal #123, Ciudad A, País</p>
                    <p>Teléfono: 123-456-7890</p>
                    <p>Horario de atención: Lunes a Viernes, 9:00 am - 5:00 pm</p>

                    <h3>Sucursal:</h3>
                    <p>Dirección: Avenida Secundaria #456, Ciudad B, País</p>
                    <p>Teléfono: 987-654-3210</p>
                    <p>Horario de atención: Lunes a Viernes, 10:00 am - 6:00 pm</p>
                </div>

                {/* Columna de Formulario de contacto */}
                <div style={{ flex: 1, marginLeft: '5%' }}>
                    <h2>Formulario de contacto:</h2>
                    <form>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                        <br /><br /><br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    );
};


export default Contactanos
