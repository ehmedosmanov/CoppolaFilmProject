import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

import NavItem from '../NavItem'

const Dropdown = ({ className, title, items, chevron }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <li className={className} onClick={() => setIsActive(!isActive)}>
        <a href='#' className='sidebar-link'>
          {title}
          <ul className={`${isActive ? 'dropdown active' : 'dropdown'}`}>
            {items &&
              items.map((item, index) => <NavItem key={index} title={item} />)}
          </ul>
        </a>
        {chevron && (
          <span>
            <FaChevronRight className={`${isActive ? 'rotate' : ''}`} />
          </span>
        )}
      </li>
    </>
  )
}

export default Dropdown
