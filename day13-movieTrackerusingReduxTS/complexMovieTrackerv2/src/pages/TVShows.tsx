import{ useEffect, useState } from 'react'
import { type Search } from '../redux/slices/SearchListSlice';
import { fetchTVSeries} from '../api/api';
import ResultCard from '../components/ResultCard';
import type { SearchTV } from '../components/ResultGrid';

type TVShowsType = "airing_today"| "popular"| "top_rated" | "on_the_air";

const TVShows = () => {
  const TVShowsTab: TVShowsType[] = ["airing_today", "on_the_air", "popular", "top_rated"];
  const [activeTVShowsTab, setActiveTVShowsTab] = useState<TVShowsType>("airing_today");
  const [resultTVShows, setResultTVShows] = useState<Search[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
    (async() => {
      let data: Search[] = [];
      try{
          setLoading(true);
          const response: SearchTV[] = await fetchTVSeries(activeTVShowsTab);
          if (response){
            data = response.map((item: SearchTV) => ({
              id: item.id,
              original_title: item.original_name,
              poster_path: item.poster_path,
              release_date: item.first_air_date,
              vote_average: item.vote_average,
              overview: item.overview
            }));
          }
        }catch(err){
        console.log("Error while fetching movie data", err);
        }finally{
          setLoading(false);
        }
      setResultTVShows([...data]);
    })();
  },[activeTVShowsTab]);


  return (
    <div>
      <div className='flex gap-5 my-5'>
      {TVShowsTab.map((item, idx) => 
      <button key={idx} onClick={() => setActiveTVShowsTab(item)} className = {`py-1 text-xl px-2 rounded-lg ${activeTVShowsTab === item ? "bg-(--var4)" : ""}`}> 
        {item === "airing_today" 
        ? "Airing Today" 
        : item === "on_the_air" 
        ? "On The Air" 
        : item === "top_rated" 
        ? "Top Rated" 
        : "Popular"}
       </button>)}
      </div>
      { loading === true ? <div className='flex justify-center items-center'>
      <h1 className='text-2xl font-bold tracking-wider text-(--var2)'> Loading... Please Wait few seconds.. </h1>
    </div> : ''}
      <div className='flex flex-wrap mt-5 gap-10 justify-center items-center'>
        {resultTVShows.map(item => <ResultCard key={item.id} item = {item} />)}
      </div>
    </div>
  )
}

export default TVShows