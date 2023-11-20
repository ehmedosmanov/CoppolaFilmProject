import React, { useState } from 'react'
import Button from '../Button'
import './index.scss'
import useFetch from '../../hooks/useFetch'
import Category from '../Category'
import Movie from '../Movie'
const PopularMovies = () => {
  const { data: categoriesData } = useFetch('http://localhost:3000/categories')
  const { data: moviesData } = useFetch('http://localhost:3000/popular-movies')
  const [filterCategory, setFilterCategory] = useState('All')

  const handleClick = categoryName => {
    setFilterCategory(categoryName)
  }

  const handleShowAll = () => {
    setFilterCategory('All')
  }

  const filteredMovies =
    filterCategory === 'All'
      ? moviesData
      : moviesData.filter(movie => movie.category === filterCategory)

  return (
    //Popular Movies Section Start
    <section id='popular-movies'>
      <div className='custom-container'>
        <div className='section-title'>
          <h4>AUDIENCE CHOIC</h4>
        </div>
        <div className='category-container pb-5'>
          <Category
            name='Show All'
            isActive={filterCategory === 'All'}
            handleClick={handleShowAll}
          />
          {categoriesData &&
            categoriesData.map(cat => (
              <Category
                key={cat.id}
                {...cat}
                isActive={filterCategory === cat.name}
                handleClick={handleClick}
              />
            ))}
        </div>
        <div className='movies pt-4'>
          <div className='row'>
            {filteredMovies &&
              filteredMovies.map(movie => <Movie key={movie.id} {...movie} />)}
          </div>
        </div>
      </div>
    </section>
    //Popular Movies Section End
  )
}

export default PopularMovies
