import React from 'react'
import Button from './Button'

const EmailCta = () => {
  return (
    <div className="container">
      <div className='email-cta'>
        <div className="email-text">
          <h2>Need a website ?</h2>
          <p>ITs simply dummy text of the printing and typesetting industry. <br /> LoremIpsum has been the industry's standard dummy text </p>
        </div>
        <Button title='Get Quotations' classes='btn btn-primary'/>
      </div>

    </div>
  )
}

export default EmailCta