import React, { useEffect, useState, type ReactNode } from 'react'

import { createContext, useContext } from 'react'
import { type Movie } from '../services/movieapi';

interface FavoriteContextType{
    favMovies: Movie[];
    setFavMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    addHandler:  (movie: Movie) => void;
    deleteHandler: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const useFavoriteContext = () => {
    const context = useContext(FavoriteContext);
    if(!context){
        throw new Error ("useFavoriteContext mustbe used within a FavoriteContextProvider")
    }
    return context;
} 

interface Props{
    children: ReactNode;
}

export const FavoriteContextProvider = ({children}: Props) => {
    const [favMovies, setFavMovies] = useState<Movie[]>(() => {
        const saved = localStorage.getItem("favMovies");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=> {
        localStorage.setItem("favMovies", JSON.stringify(favMovies));
    },[favMovies])

    const addHandler = (movie:Movie) => {
        setFavMovies( (prev) => prev.some(picture => (picture.id === movie.id)) ? prev :[...prev, movie] );
    }

    const deleteHandler = (movieId:number ) =>{
        setFavMovies(favMovies.filter((movie) => movie.id!==movieId));
    }


    const isFavorite = (movieId: number): boolean =>{
        return favMovies.some((m) => m.id === movieId)
    };



  return (
    <FavoriteContext.Provider value = { 
        {favMovies, setFavMovies, addHandler, deleteHandler, isFavorite
    }}>      
      {children}
    </FavoriteContext.Provider>
  )
}

