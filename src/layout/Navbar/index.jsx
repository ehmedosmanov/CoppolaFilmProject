import React, { useState } from 'react'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaVimeoV, FaInstagram, FaBarsStaggered } from 'react-icons/fa6'
import NavItem from '../../components/NavItem'
import Dropdown from '../../components/Dropdown'
import './index.scss'

const Navbar = () => {
  const [IsOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav id='nav' className='d-none d-lg-block'>
      <div className='navbar-container'>
        <div className='leftside-navbar'>
          <ul className='navbar-items'>
            <NavItem
              title={<FaBarsStaggered />}
              className={'navbar-item'}
              onClick={() => setIsOpenMenu(!IsOpenMenu)}
            />
            <NavItem
              title={
                <img
                  className='logo'
                  src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-width-20px.png'
                  alt='Coppola'
                />
              }
              className={'navbar-item nav-logo'}
            />
            <li className='navbar-item-social'>
              <ul className='navbar-social'>
                <NavItem
                  title={<FaYoutube />}
                  className={'navbar-social-item'}
                />
                <NavItem
                  title={<FaInstagram />}
                  className={'navbar-social-item'}
                />
                <NavItem
                  title={<FaVimeoV />}
                  className={'navbar-social-item'}
                />
                <NavItem
                  title={<FaTwitter />}
                  className={'navbar-social-item'}
                />
              </ul>
            </li>
          </ul>
        </div>
        <div
          className={`${
            IsOpenMenu ? 'rightside-navbar active' : 'rightside-navbar'
          }`}>
          <ul className='sidebar-items'>
            <NavItem title={'Home'} className={'sidebar-item'} />
            <NavItem title={'Our Team'} className={'sidebar-item'} />
            <NavItem title={'Contact Us'} className={'sidebar-item'} />
            <Dropdown
              className={'sidebar-item'}
              title={'Shop'}
              items={['Product List', ' Product Single']}
            />
            <Dropdown
              className={'sidebar-item'}
              title={'About Us'}
              items={['About List', ' About Single']}
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
