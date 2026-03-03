import{ useEffect, useState } from 'react'
import { type Search } from '../redux/slices/SearchListSlice';
import { fetchMovie } from '../api/api';
import ResultCard from '../components/ResultCard';

type MovieType = "now_playing"| "popular"| "top_rated" | "upcoming";

const Movies = () => {
  const moviesTab: MovieType[] = ["now_playing", "popular", "top_rated", "upcoming"];
  const [activeMovieTab, setActiveMovieTab] = useState<MovieType>("now_playing");
  const [resultMovies, setResultMovies] = useState<Search[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
    (async() => {
      let data: Search[] = [];
      try{
          setLoading(true);
          const response: Search[] = await fetchMovie(activeMovieTab);
          if (response){
            data = response.map((item:Search) => ({
              id: item.id,
              original_title: item.original_title,
              poster_path: item.poster_path,
              release_date: item.release_date,
              vote_average: item.vote_average,
              overview: item.overview
            }));
          }
        }catch(err){
        console.log("Error while fetching movie data", err);
        }finally{
          setLoading(false);
        }
      setResultMovies([...data]);
    })();
  },[activeMovieTab]);


  return (
    <div>
      <div className='flex gap-5 my-5'>
      {moviesTab.map((item, idx) => 
      <button key={idx} onClick={() => setActiveMovieTab(item)} className = {`py-1 text-xl px-2 rounded-lg ${activeMovieTab === item ? "bg-(--var4)" : ""}`}> 
        {item === "now_playing" 
        ? "Now Playing" 
        : item === "upcoming" 
        ? "Upcoming" 
        : item === "top_rated" 
        ? "Top Rated" 
        : "Popular"}
       </button>)}
      </div>
      { loading === true ? <div className='flex justify-center items-center'>
      <h1 className='text-2xl font-bold tracking-wider text-(--var2)'> Loading... Please Wait few seconds.. </h1>
    </div> : ''}
      <div className='flex flex-wrap mt-5 gap-10 justify-center items-center'>
        {resultMovies.map(item => <ResultCard key={item.id} item = {item} />)}
      </div>
    </div>
  )
}

export default Movies