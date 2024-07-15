import React from 'react'
import { partnerList } from '../constants'

const PartnersSection = () => {
  return (
    <div className="partners-section">
      <div className='container'>
        <h2>With over 200+ partnered clients all over the world</h2>
        <div className='partner-list'>
          {partnerList.map(item => (
            <img src={item.path} alt={item.title} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersSection