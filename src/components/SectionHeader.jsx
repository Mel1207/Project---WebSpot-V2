import React from 'react'
import Button from './Button'

const SectionHeader = ({spanText, title}) => {
  return (
    <div className="section-header">
      <div>
        <span>{spanText}</span>
        <h3>{title}</h3>
      </div>
      <Button title='See all' classes='btn-red'/>
    </div>
  )
}

export default SectionHeader