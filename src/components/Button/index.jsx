import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import './index.scss'

const Button = ({ btnClass, content, icon }) => {
  return (
    <button className={btnClass}>
      {content} {icon && <CiPlay1 />}
    </button>
  )
}

export default Button
