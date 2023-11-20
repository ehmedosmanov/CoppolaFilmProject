import React from 'react'
import Ticket from '../Ticket'

const Tickets = () => {
  return (
    <section id='tickets'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>TICKETS</h4>
        </div>
        <div className='row py-5'>
          <Ticket title={'ONE DAY'} type={'Regular ticket'} price={'$10'} />
          <Ticket
            title={'ONE DAY'}
            type={'Regular ticket'}
            price={'$10'}
            dark={true}
          />
          <Ticket
            title={'ONE DAY'}
            type={'Regular ticket'}
            price={'$10'}
            pack={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Tickets
