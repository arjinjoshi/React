import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Movie } from "../services/movieapi";

interface WatchListContextType{
    addWatchList: (movie: Movie) => void;
    removeFromWatch:  (movieId: number) => void;
    isWatched:  (movieId: number) => boolean;
    watchedMovies: Movie[];
    setWatchedMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

const WatchListContext = createContext<WatchListContextType | null>(null);

export const useWatchListContext = () =>{

        const context = useContext(WatchListContext);
        if(!context){
            throw new Error("Can't use useWatchListContext outside of WatchListContextProvider")
        }
        return context;
}

interface WatchListContextProviderProps {
    children: ReactNode;
}

export const WatchListContextProvider = ({children}: WatchListContextProviderProps)=>{


    const [watchedMovies, setWatchedMovies] = useState<Movie[]>(()=>
        {const data = localStorage.getItem("watchedMovies");
        return data ? JSON.parse(data):[]}
    )
    useEffect(()=>{
        localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies))
    },[watchedMovies]);

    const addWatchList = (movie: Movie) => {
        setWatchedMovies((prev) => prev.some(picture => picture.id === movie.id) ? prev : [...prev, movie]);
    }

    const removeFromWatch = (movieId: number) => {
       setWatchedMovies((movies => movies.filter(m => m.id !== movieId)));
    }

    const isWatched = (movieId: number) => {
        return watchedMovies.some(movie => movie.id === movieId)
    }


  return  (<WatchListContext.Provider value = {{
    addWatchList,
    removeFromWatch,
    isWatched,
    watchedMovies,
    setWatchedMovies

    }}>
    {children}
    </WatchListContext.Provider>)
}