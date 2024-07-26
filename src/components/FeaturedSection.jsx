import React from 'react'
import Button from './Button'

const FeaturedSection = () => {
  return (
    <div className='featured-works'>
      <div className="container">
        <div className="section-header">
          <div>
            <span>Our projects</span>
            <h3>Featured Wroks</h3>
          </div>
          <Button title={'See all'} classes={'btn-red'}/>
        </div>
        <div className='featured-works-list'>
          <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            <img src="#!" alt="John Doe" />
            <span>CEO - ABC Solutions</span>
          </div>
          <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</div>
          <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection