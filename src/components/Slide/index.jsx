// Slide.js
import React from 'react'
import Button from '../Button'
import './index.scss'

const Slide = ({ title, director, info, locations, background }) => {
  return (
    <div className={`slider-content ${background} background`}>
      <div className='row'>
        <div className='slider-heading col-lg-8'>
          <div className='slider-title'>
            <p>TWEAK PRODUCTION PRESENTS</p>
            <h1>{title}</h1>
            <p className='py-3'>{director}</p>
          </div>
          <div className='slider-graduations'>
            <div className='best'>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png'
                alt=''
              />
            </div>
            <div className='best'>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png'
                alt=''
              />
            </div>
            <div className='best'>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 right-side d-flex justify-content-between'>
          <div className='slider-info d-flex justify-content-between flex-column'>
            <div className='slider-info'>
              <h4>{info}</h4>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png'
                alt=''
              />
              <p>{locations}</p>
            </div>
            <div className='buttons'>
              <Button content={`Play`} icon={true} btnClass={'custon-btn'} />
              <Button content={'Get Tickets'} btnClass={'custon-btn outline'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
