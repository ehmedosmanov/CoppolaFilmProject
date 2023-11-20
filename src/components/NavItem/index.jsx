import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const NavItem = ({ className, title, onClick, chevron }) => {
  return (
    <li className={className} onClick={onClick}>
      <a href='#'>{title}</a>
      {chevron && (
        <span className='right-chevron'>
          <FaChevronRight />
        </span>
      )}
    </li>
  )
}

export default NavItem
