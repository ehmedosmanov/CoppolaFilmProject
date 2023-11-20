import React from 'react'
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaVimeoSquare
} from 'react-icons/fa'

import './index.scss'
const Footer = () => {
  return (
    //Footer Section Start
    <footer id='footer'>
      <div className='custom-container'>
        <div className='top-side-footer pb-5 mb-5'>
          <div className='row'>
            <div className='logo col-lg-6 '>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png'
                alt=''
              />
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bottom-side-footer pt-3'>
          <div className='row align-content-center '>
            <div className='col-lg-6 d-flex flex-column '>
              <div className='icons-footer '></div>
              <ul className='d-flex pb-2'>
                <li className='ps-2'>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                    <FaYoutube />
                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                    <FaInstagram />
                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                    <FaVimeoSquare />
                  </a>
                </li>
              </ul>
              <p>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
            </div>
            <div className='col-lg-3'>
              <ul className=''>
                <li>
                  <a href='#'>1361 via del Parione</a>
                </li>
                <li>
                  <a href='#'>Florence CA</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <input
                type='text'
                className='input'
                placeholder={'Sign Up Newsletter'}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
    //Footer Section End
  )
}

export default Footer
