import React from 'react'

const Category = ({ name, isActive, handleClick }) => {
  return (
    <div className={`category ${isActive ? ' active' : ''}`}>
      <button
        className={`${isActive ? ' active' : ''}`}
        onClick={() => handleClick(name)}>
        {name}
      </button>
    </div>
  )
}

export default Category
