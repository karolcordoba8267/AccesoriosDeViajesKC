import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Hand-icon.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Colection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hand_icon} alt="" />
            </div>
        </div>
    )
}

export default Hero
