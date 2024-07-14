import React from 'react'

const Button = ({title, classes}) => {
  return (
    <button className={`btn ${classes}`}>
      {title}
    </button>
  )
}

export default Button