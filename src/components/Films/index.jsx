import React from 'react'
import './index.scss'
import FilmTrailer from '../FilmTrailer'
import useFetch from '../../hooks/useFetch'

const Films = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/trailers')
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    // Films Section Start
    <section id='Films'>
      <div className='custom-container'>
        <div className='row'>
          {data &&
            data.map(trailer => <FilmTrailer key={trailer.id} {...trailer} />)}
        </div>
      </div>
    </section>
    // Films Section End
  )
}

export default Films
