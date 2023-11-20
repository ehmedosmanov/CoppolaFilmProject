import React from 'react'
import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const Speakers = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  return (
    <section id='speakers'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>MAGAZINE</h4>
        </div>
        <div className='row'>
          <div
            className='col-lg-3 d-flex
    justify-content-center
    align-items-center m-lg-0 mb-5 '>
            <div className='expert-comment'>
              <h4>LEARNING FROM EXPERTS</h4>
              <p>
                Et pri magna evertitur. Ne qui doctus interesset, ad eum ullum
                accusam, te nam iusto iisque omittam. Elit nobis magnas iust.
              </p>
            </div>
          </div>
          <div className='col-lg-9 col-12 '>
            <Swiper
              breakpoints={breakpoints}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className='mySwiper'>
              <SwiperSlide>
                <div className='speaker'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img2.jpg'
                    alt=''
                  />
                  <div className='speaker-consts pb-3'>
                    <h5>
                      Tripp <span className='surname'>Mickay</span>
                    </h5>
                    <p>Camera OPerator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='speaker'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img3.jpg'
                    alt=''
                  />
                  <div className='speaker-consts pb-3'>
                    <h5>
                      Tripp <span className='surname'>Mickay</span>
                    </h5>
                    <p>Camera OPerator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='speaker'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img3.jpg'
                    alt=''
                  />
                  <div className='speaker-consts pb-3'>
                    <h5>
                      Tripp <span className='surname'>Mickay</span>
                    </h5>
                    <p>Camera OPerator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='speaker'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img3.jpg'
                    alt=''
                  />
                  <div className='speaker-consts pb-3'>
                    <h5>
                      Tripp <span className='surname'>Mickay</span>
                    </h5>
                    <p>Camera OPerator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='speaker'>
                  <img
                    src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img1.jpg'
                    alt=''
                  />
                  <div className='speaker-consts pb-3'>
                    <h5>
                      Tripp <span className='surname'>Mickay</span>
                    </h5>
                    <p>Camera OPerator</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers
