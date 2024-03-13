import React from 'react'
import Footer from '../Components/Hero/Footer'

const Blog = () => {
    return (
        <div>
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '5%', paddingLeft: '10%', paddingRight: '10%', paddingBottom: '5%' }}>
                <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1>¡Encuentra los mejores consejos y recomendaciones para tus aventuras!</h1>
                </header>
                <main style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))', gap: '20px' }}>
                    <article style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
                        <h2>Los beneficios de viajar con una mochila de mano</h2>
                        <p>¿Estás buscando la forma más conveniente de viajar? Descubre los beneficios de optar por una mochila de mano en tus próximas aventuras:</p>
                        <ul>
                            <li>Mayor movilidad y libertad de movimiento.</li>
                            <li>Evita las largas esperas en el reclamo de equipaje.</li>
                            <li>Ahorra dinero en tarifas de equipaje facturado.</li>
                            <li>Reduce el riesgo de perder tu equipaje.</li>
                            <li>Facilita la exploración de destinos con calles estrechas o terrenos irregulares.</li>
                        </ul>
                        <p>Con una mochila de mano bien organizada, podrás disfrutar de todas estas ventajas y viajar de manera más ligera y cómoda. ¡Prepárate para explorar el mundo con tu mochila a cuestas!</p>
                        <a href="#">Leer más</a>
                    </article>

                    <article style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
                        <h2>Los 10 mejores accesorios de viaje imprescindibles para tu próxima aventura</h2>
                        <p>Si estás planeando tu próxima aventura, asegúrate de estar preparado con los accesorios de viaje adecuados. Desde organizadores de equipaje hasta gadgets útiles, aquí te presentamos los 10 mejores accesorios de viaje que no puedes dejar en casa:</p>
                        <ol>
                            <li>Una mochila versátil y resistente que te permita llevar tus pertenencias de manera cómoda y segura.</li>
                            <li>Un adaptador de corriente universal para cargar tus dispositivos electrónicos en cualquier parte del mundo.</li>
                            <li>Un juego de organizadores de equipaje para mantener tus prendas y accesorios ordenados y fáciles de encontrar.</li>
                            <li>Una botella de agua plegable y reutilizable para mantenerte hidratado durante tus aventuras.</li>
                            <li>Una almohada de viaje ergonómica que te brinde comodidad en vuelos largos y viajes en tren.</li>
                        </ol>
                        <p>Con estos accesorios de viaje imprescindibles, estarás listo para enfrentar cualquier aventura que te depare el mundo. ¡Prepárate para explorar y descubrir nuevos destinos!</p>
                        <a href="#">Leer más</a>
                    </article>
                    <article style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
                        <h2>Los mejores consejos para empacar ligero en tu próxima aventura</h2>
                        <p>¿Quieres evitar el estrés de llevar demasiado equipaje en tu próximo viaje? Sigue estos simples consejos para empacar de manera ligera y eficiente:</p>
                        <ul>
                            <li>Haz una lista de lo esencial y elimina lo que no necesites.</li>
                            <li>Opta por ropa versátil que puedas combinar fácilmente.</li>
                            <li>Utiliza organizadores de equipaje para maximizar el espacio en tu maleta.</li>
                            <li>Lleva solo lo necesario en términos de artículos de tocador y productos de cuidado personal.</li>
                            <li>Considera llevar ropa que puedas lavar y secar fácilmente en el camino.</li>
                        </ul>
                        <p>Siguiendo estos consejos, podrás disfrutar de tu viaje con menos peso y más comodidad. ¡Empaca ligero y disfruta al máximo de tu aventura!</p>
                        <a href="#">Leer más</a>
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Blog
