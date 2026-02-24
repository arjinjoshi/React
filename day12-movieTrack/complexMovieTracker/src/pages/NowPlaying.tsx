import React from 'react'
import MovieList from '../components/MovieList'

const NowPlaying = () => {
  return (
    <div>
        <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Now Playing</h2>
        <MovieList url="now_playing" />
    </div>
  )
}

export default NowPlaying