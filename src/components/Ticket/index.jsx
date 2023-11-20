import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import './index.scss'

const Ticket = ({ title, type, price, dark, pack }) => {
  return (
    <div className='col-lg-4 col-12'>
      <div
        className={`ticket-content ${dark ? 'dark' : ''} ${
          pack ? 'pack' : ''
        }`}>
        <div className='row'>
          <div className='leftside-ticket col-9'>
            <h3 className='ticket-title'>{title}</h3>
            <div className='ticket-info'>
              <p> Type: {type}</p>
              <p>Price:{price}</p>
            </div>

            <div className='additional-info'>
              <p>*Lorem ipsum dolores sit amet, dlores sit.</p>
            </div>
          </div>

          <div className='rightside-ticket col-3'>
            <div className='circle'></div>
            <div className='buy'>
              <span>Buy</span>
              <span>
                <MdArrowOutward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
