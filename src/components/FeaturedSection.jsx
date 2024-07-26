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
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection