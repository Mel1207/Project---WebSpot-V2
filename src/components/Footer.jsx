import React from 'react'
import FooterLogo from '../assets/LOGO.svg'
import { navLinks } from '../constants'
import IconFb from '../assets/social-icons/IconFb'
import IconLinkedin from '../assets/social-icons/IconLinkedin'
import IconTwitterX from '../assets/social-icons/IconTwitterX'
import IconInstagram from '../assets/social-icons/IconInstagram'
import IconPinterest from '../assets/social-icons/IconPinterest'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer-top'>
          <img src={FooterLogo} alt="logo" />
          <div className='footer-links'>
            {navLinks.map(item => (
              <a href={item.path} key={item.id}>{item.title}</a>
            ))}
          </div>
          
          <div className='social-icons'>
            <a href="#!"><IconFb /></a>
            <a href="#!"><IconLinkedin /></a>
            <a href="#!"><IconTwitterX /></a>
            <a href="#!"><IconInstagram /></a>
            <a href="#!"><IconPinterest /></a>
          </div>
        </div>
        <div className='footer-bottom'>
          <span>Copyright@webspot2024</span>
          <div className='legal'>
            <a href="#!">Terms</a>
            <a href="#!">Conditions</a>
            <a href="#!">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer