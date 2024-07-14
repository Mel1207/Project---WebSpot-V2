import React from 'react'
import Button from './Button'
import imgHero from './../assets/img-hero.svg'

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <h1>Your Vision Comes to Reality</h1>
        <p>We are a digital service company to help your needs on building your site. <br />With our experts and experience in digital industry.</p>
        <div className="hero-cta">
          <Button classes='btn-red' title='Our Projects'/>
          <Button classes='btn-white' title='Talk to Us'/>
        </div>

        <img src={imgHero} alt="Hero image"  className='hero-img'/>
      </div>
    </div>
  )
}

export default Hero