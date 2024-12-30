import React from 'react'
import logoMain from '../assets/LOGO.svg'
import { navLinks } from '../constants'
import Button from './Button'
import IconMenu from '../assets/IconMenu'

const Navigatgion = () => {
  return (
    <nav className='navbar'>
      <div className="container nav-container">
        <img src={logoMain} alt="Webspot Logo" />

        <ul className='nav-links'>
          {navLinks.map(item => (
            <li key={item.id}>
              <a href={item.path} aria-label={item.title}>{item.title}</a>
            </li>
          ))}
        </ul>

        <Button classes='btn-red' title='Get Quotation'/>
        <button className='btn-menu'>
          <IconMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navigatgion