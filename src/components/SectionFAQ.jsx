import React, { useState } from 'react'

const SectionFAQ = () => {
  const faqItems = [
    { 
      id: 1, 
      question: 'How to avail services?',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    { 
      id: 2, 
      question: 'How to avail services?',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    { 
      id: 3, 
      question: 'How to avail services?',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    { 
      id: 4, 
      question: 'How to avail services?',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    { 
      id: 5, 
      question: 'How to avail services?',
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]
  return (
    <div className="section-faq">
      <div className='container'>
        <div className="section-text">
          <h2>Frequently Asked Questions</h2>
          <p>ITs simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text </p>
        </div>
        <div className='accordion'>
          {faqItems.map(item => (
            <div key={item.id} className='acc-item'>
              <div className='acc-question'>{item.question}</div>
              <div>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}

export default SectionFAQ