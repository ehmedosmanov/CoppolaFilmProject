import React from 'react'
import './index.scss'
const Documentary = () => {
  return (
    // Documentary Section Start
    <section id='documentary'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>AUDIENCE CHOIC</h4>
        </div>
        <div className='documentary-content row'>
          <div className='col-lg-6 pe-5'>
            <video
              class='elementor-video'
              src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4'
              autoplay=''
              loop=''
              muted='muted'
              playsinline=''
              controlslist='nodownload'
              poster='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-img1.jpg'></video>
          </div>
          <div className='col-lg-6 ps-5'>
            <div className='best-content'>
              <p>DOCUMENTARY</p>
              <h2>LIFE ON THE ISLAND</h2>
              <p>documentary film by Mirela Bagaric / Croatia 2021</p>
              <div className='best'>
                <div className='best-img'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png'
                    alt=''
                  />
                </div>
                <div className='best-img'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Documentary Section End
  )
}

export default Documentary
