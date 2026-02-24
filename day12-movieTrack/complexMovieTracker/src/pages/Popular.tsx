import React from 'react'
import MovieList from '../components/MovieList'

const Popular = () => {
  return (
    <div>
        <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Popular</h2>
        <MovieList url="popular" />
    </div>
  )
}

export default Popular