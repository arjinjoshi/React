import React from 'react'
import MovieList from '../components/MovieList'

const TopRated = () => {
  return (
    <div>
        <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Top Rated</h2>
        <MovieList url="top_rated" />
    </div>
  )
}

export default TopRated