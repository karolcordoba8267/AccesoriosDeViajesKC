import React from 'react'
import Footer from '../Components/Hero/Footer'

const SobreNosotros = () => {
    return (
        <div >
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '5%', paddingLeft: '10%', paddingRight: '10%', paddingBottom: '10%' }}>
                <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1 style={{ fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '30px' }}>
                        Accesorios de Viajes{' '}
                        <span style={{ color: 'pink', fontFamily: 'Pacifico', fontSize: '40px', WebkitTextStroke: '1px black' }}>
                            KJ~CS
                        </span>
                    </h1>

                </header>
                <section style={{ marginBottom: '20px' }}>
                    <h2>Información de la Empresa</h2>
                    <p>Somos una empresa dedicada a proporcionar soluciones innovadoras para viajes y aventuras. Desde accesorios de viaje hasta servicios de asesoramiento, nos esforzamos por ofrecer productos y servicios de alta calidad que mejoren la experiencia de nuestros clientes.</p>
                </section>
                <section style={{ marginBottom: '20px' }}>
                    <h2>Misión</h2>
                    <p>Nuestra misión es inspirar y facilitar los viajes, brindando a nuestros clientes productos y servicios de primera calidad que les permitan explorar el mundo de manera segura, cómoda y memorable.</p>
                </section>
                <section>
                    <h2>Visión</h2>
                    <p>Nuestra visión es convertirnos en líderes en la industria de viajes y aventuras, siendo reconocidos por nuestra innovación, calidad y compromiso con la satisfacción del cliente.</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default SobreNosotros
