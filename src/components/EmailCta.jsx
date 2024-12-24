import React from 'react'
import Button from './Button'
import EmailCtaFigure from '../assets/email-cta-figure.svg'

const EmailCta = () => {
  return (
    <div className="container">
      <div className='email-cta'>
        <div>
          <div className="email-text">
            <h2>Need a website ?</h2>
            <p>ITs simply dummy text of the printing and typesetting industry. <br /> LoremIpsum has been the industry's standard dummy text </p>
          </div>
          <Button title='Get Quotations' classes='btn btn-red'/>
        </div>
        <img src={EmailCtaFigure} alt="" className='email-figure'/>
      </div>

    </div>
  )
}

export default EmailCta