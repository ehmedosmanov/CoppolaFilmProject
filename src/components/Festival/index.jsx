import React from 'react'
import './index.scss'
import Button from '../Button'

const Festival = ({ date, title, times }) => {
  return (
    <div className='row fs-5 mt-4'>
      <div className=' border-r col-lg-1 col-12'>
        <p>{date}</p>
      </div>
      <div className='border-r col-lg-5 col-12'>
        <h4>{title}</h4>
      </div>
      <div className='border-r col-lg-3 col-12'>
        <h5>
          {times && times.map(time => <span key={time}>{` ${time} /`}</span>)}
        </h5>
      </div>
      <div className='border-r col-lg-3 col-12 mt-lg-0 mt-3'>
        <div className='festival-buttons'>
          <Button content={'View More'} btnClass={'custon-btn dark p-0'} />
          <Button
            content={'Get Tickets'}
            btnClass={'custon-btn dark outline-dark ms-3'}
          />
        </div>
      </div>
    </div>
  )
}

export default Festival
