import { useState } from 'react'
import './index.scss'
import NavItem from '../NavItem'
import Dropdown from '../Dropdown'

const MobileNav = () => {
  const [IsOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav id='mobile-nav' className='d-block d-lg-none'>
      <div className='mobile-nav-container'>
        <div className='mobile-nav-header'>
          <div className='logo'>
            <img
              src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png'
              alt='Logo'
            />
          </div>
          <div
            className={`${IsOpenMenu ? 'menu-btn open' : 'menu-btn'}`}
            onClick={() => setIsOpenMenu(!IsOpenMenu)}>
            <div className='menu-btn__burger'></div>
          </div>
        </div>
        <div className={`${IsOpenMenu ? 'mobile-nav active' : 'mobile-nav'}`}>
          <ul className='mobile-nav-items'>
            <NavItem
              title={'Home'}
              className={'mobile-nav-item'}
              chevron={true}
            />
            <NavItem
              title={'Our Team'}
              className={'mobile-nav-item'}
              chevron={true}
            />

            <NavItem
              title={'Contact Us'}
              className={'mobile-nav-item'}
              chevron={true}
            />

            <Dropdown
              className={'mobile-nav-item'}
              chevron={true}
              title={'Shop'}
              items={['Product List', ' Product Single']}
            />
            <Dropdown
              className={'mobile-nav-item'}
              chevron={true}
              title={'About Us'}
              items={['About List', ' About Single']}
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
