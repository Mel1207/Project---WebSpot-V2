import React from 'react'
import { servicesList } from '../constants'
import Button from './Button'
import SectionHeader from './SectionHeader'

const SectionServices = () => {
  return (
    <div className='services-section'>
      <div className='container'>
        <SectionHeader title='What we can offer' spanText='Our services'/>
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

export default SectionServices