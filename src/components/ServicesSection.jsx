import React from 'react'
import { servicesList } from '../constants'
import Button from './Button'

const ServicesSection = () => {
  return (
    <div className='services-section'>
      <div className='container'>
        <div className='section-header'>
          <div>
            <span>Our services</span>
            <h3>What we can offer</h3>
          </div>
          <Button title={'See all'} classes={'btn-red'}/>
        </div>
        <div className='service-list'>
          {servicesList.map(item => (
            <div key={item.id} className={`service-card ${item.cVersion === 1 ? 'cv1' : 'cv2'}`}>
              <div className='service-icon'>
                <img src={item.icon} alt={item.title}/>
              </div>
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