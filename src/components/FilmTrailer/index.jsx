import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

import './index.scss'

const FilmTrailer = ({ img, title, director, country, url }) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-12'>
        <div className='trailer my-3'>
          <a href='#'>
            <div className='trailer-img'>
              <img src={img} alt={title} />
            </div>
            <div className='overlay'></div>
            <div className='trailer-title'>
              <h4>{title}</h4>
              <p>
                <span>{director}</span> / <span>{country}</span>
              </p>
            </div>
            <div className='icon'>
              <a href={url}>
                <CiPlay1 />
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default FilmTrailer
