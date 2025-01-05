import React from 'react'
import industry1 from '../assets/industry1.png'
import industry2 from '../assets/industry2.png'
import industry3 from '../assets/industry3.png'

const SectionAbout = () => {
  return (
    <div className='about-section'>
      <div className="container">
        <div> 
          <h1>With over 10+ years <br /> Building the IT industry</h1>
          <div className='industries'>
            <img src={industry1} alt="" />
            <img src={industry2} alt="" />
            <img src={industry3} alt="" />
          </div>
        </div>
        <div className='about-text'>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use.</p>

          <div className='statistics'>
            <div className='stats'>
              <p className='stats-number'>300+</p>
              <p>Projects Deployed</p>
            </div>
            <div className='stats'>
              <p className='stats-number'>120+</p>
              <p>Talent People</p>
            </div>
            <div className='stats'>
              <p className='stats-number'>85+</p>
              <p>Branches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionAbout