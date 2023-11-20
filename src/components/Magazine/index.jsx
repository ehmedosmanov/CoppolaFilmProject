import React from 'react'
import Button from '../Button'
import './index.scss'

const Magazine = () => {
  return (
    <section id='Magazine'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>MAGAZINE</h4>
        </div>
        <div className='content_magazine'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='left-side_magazine'>
                <div className='content'>PRODUCERS DECEMBER 10</div>
                <h3 className='py-2'>
                  INTERVIEW WITH MOVIE PRODUCER PAUL GANGE
                </h3>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur.</p>
                <Button
                  content={'View More'}
                  btnClass={'custon-btn dark outline-dark'}
                />
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='right-side_magazine'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Magazine
