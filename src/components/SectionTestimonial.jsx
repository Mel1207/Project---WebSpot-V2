import React from 'react'
import { avatarList, testimonialList } from '../constants'

const SectionTestimonial = () => {
  return (
    <div className='section-testimonial'>
      <div className="container">
        <div className="section-text">
          <h2>What our client say</h2>
          <p>ITs simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text </p>
        </div>
      
        <div className='testimonials'>
          {testimonialList.map(item => (
            <div className='testimonial-card'>
              <p>{item.message}</p>
              <img src={item.avatarSrc} alt={item.name} className='testimonial-avt'/>
              <h4>{item.name}</h4>
              <span>{item.company}</span>
            </div>
          ))}
        </div>

        <div className='avatar-list'>
          {avatarList.map(item => (
            <img src={item.src} alt={item.title} className={item.theme}/>
          ))}
        </div>
        <p className='avatar-text'>Join over 1500+ active developer clients</p>
      </div>
      
    </div>
  )
}

export default SectionTestimonial