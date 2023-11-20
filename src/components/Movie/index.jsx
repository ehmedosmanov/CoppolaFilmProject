import React from 'react'

const Movie = ({ url, title, price, status }) => {
  return (
    <div className='movie col-lg-2'>
      <div className='card-img'>
        <img src={url} alt='' />
        <button className='basket'>Add to Cart</button>
        {status && <span className='status'>{status}</span>}
      </div>
      <div className='card-content pt-3'>
        <h5>{title}</h5>
        <span>${price}</span>
      </div>
    </div>
  )
}

export default Movie
