import React from 'react'
import MovieList from '../components/MovieList'

const Upcoming = () => {
  return (
    <div>
        <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Upcoming</h2>
        <MovieList url="upcoming" />
    </div>
  )
}

export default Upcoming