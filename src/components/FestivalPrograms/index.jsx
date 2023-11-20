import React from 'react'
import './index.scss'
import Festival from '../Festival'
import useFetch from '../../hooks/useFetch'

const FestivalPrograms = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/festivals')
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    // Festival-Programs Section Start
    <section id='festival-programs'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>FESTIVAL PROGRAMME</h4>
        </div>
        <div className='festival-table pt-5'>
          {data &&
            data.map(festival => <Festival key={festival.id} {...festival} />)}
        </div>
      </div>
    </section>
    // Festival-Programs Section End
  )
}

export default FestivalPrograms
