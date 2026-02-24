import React from 'react'
import { useFavoriteContext } from '../context/favContext'
import MovieCard from '../components/MovieCard';

const Favorites = () => {
    const {favMovies} = useFavoriteContext();

    if(favMovies.length === 0){
        return <div className='flex w-screen min-h-screen flex-col justify-center items-center'>
            <h2 className='text-2xl tracking-wide'>Add some movies in Favorite</h2>
            <p className='text-lg tracking-wide'>No any movie is present </p>
        </div>
    }
  return (
    <div>
        <h2 className="text-3xl text-yellow-500 font-extrabold ml-10 mt-5">Favorites among already watched:</h2>
        <div  className='ml-10 flex flex-wrap gap-x-15'>
            {favMovies.map(picture => <MovieCard key={picture.id} movie={picture}/>)}
        </div>
    </div>
  )
}

export default Favorites