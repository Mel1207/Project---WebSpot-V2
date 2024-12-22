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

  const [activeAcc, setActiveAcc] = useState(1)

  const currentAcc = (id) => {
    setActiveAcc(id)
  }

  return (
    <div className="section-faq">
      <div className='container'>
        <div className="section-text">
          <h2>Frequently Asked Questions</h2>
          <p>ITs simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text </p>
        </div>
        <div className='accordion'>
          {faqItems.map(item => (
            <div key={item.id} className={activeAcc === item.id ? 'acc-item active' : 'acc-item'} onClick={() => currentAcc(item.id)}>
              <div className='acc-question'>{item.question}</div>
              {activeAcc === item.id ? (
                <div className='acc-answer'>{item.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionFAQ