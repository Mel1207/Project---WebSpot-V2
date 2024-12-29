import React from 'react'
import SectionHeader from './SectionHeader'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const FeaturedSection = () => {
  return (
    <div className='featured-works'>
      <div className="container">
        <SectionHeader spanText="Our Projects" title="Featured Works"/>
        <div className='featured-works-list'>
          <div className='work-card'>
            <img src={work1} alt="work 1" />
          </div>
          <div className="work-card">
            <img src={work2} alt="work 2" />
          </div>
          <div className="work-card">
            <img src={work3} alt="work 3" />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection