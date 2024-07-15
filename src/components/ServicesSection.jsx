import React from 'react'
import { servicesList } from '../constants'

const ServicesSection = () => {
  return (
    <div className='services-section'>
      <div className='container'>
        <span>Our services</span>
        <h3>What we can offer</h3>
        <div className='service-list'>
          {servicesList.map(item => (
            <div key={item.id} className='service-card'>
              <img src={item.icon} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection