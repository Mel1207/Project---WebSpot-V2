import React from 'react'
import FooterLogo from '../assets/LOGO.svg'
import { navLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div>
          <img src={FooterLogo} alt="logo" />
          {navLinks.map(item => (
            <a href={item.path} key={item.id}>{item.title}</a>
          ))}
          <div>
            {/* THIS IS LOGOs */}
          </div>
        </div>
        <div>
          <span>Copyright@webspot2024</span>
          <div>
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