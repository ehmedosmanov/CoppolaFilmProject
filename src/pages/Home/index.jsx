import React from 'react'
import Navbar from '../../layout/Navbar'
import MobileNav from '../../components/MobileNav'
import Header from '../../layout/Header'
import './index.scss'
import Films from '../../components/Films'
import FestivalPrograms from '../../components/FestivalPrograms'
import Documentary from '../../components/Documentary'
import PopularMovies from '../../components/PopularMovies'
import Magazine from '../../components/Magazine'
import Speakers from '../../components/Speakers'
import Footer from '../../layout/Footer'
import Tickets from '../../components/Tickets'
import Brands from '../../components/Brands'

const Home = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      {/* Wrapper Start */}
      <div className='wrapper'>
        <Header />
        {/* Main Start */}
        <main id='main'>
          <Films />
          <FestivalPrograms />
          <Documentary />
          <PopularMovies />
          <Magazine />
          <Speakers />
          <Tickets />
          <Brands />
        </main>
        <Footer />
        {/* Main End */}
      </div>
      {/* Wrapper End */}
    </>
  )
}

export default Home
