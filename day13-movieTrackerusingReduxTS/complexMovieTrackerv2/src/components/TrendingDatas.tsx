import{ useEffect, useState } from 'react'
import { type Search } from '../redux/slices/SearchListSlice';
import {fetchTrendingDatas } from '../api/api';
import ResultCard from './ResultCard';

type TrendingDatasType = "day"| "week";

const TrendingDatas = () => {
  const moviesTab: TrendingDatasType[] = ["day", "week"];
  const [activeTrendingTab, setActiveTrendingTab] = useState<TrendingDatasType>("day");
  const [resultDatas, setResultDatas] = useState<Search[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
    (async() => {
      let data: Search[] = [];
      try{
          setLoading(true);
          const response: Search[] = await fetchTrendingDatas(activeTrendingTab);
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
      setResultDatas([...data]);
    })();
  },[activeTrendingTab]);


  return (
    <div>
      <h2 className='text-3xl tracking-wider font-bold'>Trendings</h2>
      <div className='flex gap-5 my-5'>   
        {moviesTab.map((item, idx) => 
        <button key={idx} onClick={() => setActiveTrendingTab(item)} className = {`py-1 text-xl px-2 rounded-lg ${activeTrendingTab === item ? "bg-(--var4)" : ""}`}> 
          {item === "day" 
          ? "Day"  
          : "Week"}
        </button>)}
      </div>
      { loading === true ? <div className='flex justify-center items-center'>
      <h1 className='text-2xl font-bold tracking-wider text-(--var2)'> Loading... Please Wait few seconds.. </h1>
    </div> : ''}
      <div className='flex flex-wrap mt-5 gap-10 justify-center items-center'>
        {resultDatas.map(item => <ResultCard key={item.id} item = {item} />)}
      </div>
    </div>
  )
}

export default TrendingDatas