import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { searchResult } from '../api/api';
import { setIsError, setIsLoading, setResults, type Search } from '../redux/slices/SearchListSlice';
import ResultCard from './ResultCard';

export interface SearchTV{
  id: number;
  original_name: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
}

const ResultGrid = () => {
  const {query, activeTab, isError, isLoading, results} = useAppSelector(store => store.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async() => {
      if(!query) return ;
      let data: Search[] = [];
      try{
        dispatch(setIsLoading());
        if(activeTab === "movie"){
          const response: Search[] = await searchResult(activeTab, query);
          if (response){
            data = response.map((item:Search) => ({
              id: item.id,
              original_title: item.original_title,
              poster_path: item.poster_path,
              release_date: item.release_date,
              vote_average: item.vote_average,
              overview: item.overview
            }));
          }else{
            console.error("Error while fetching movies from backend")
          }
          
        }
        if(activeTab === "tv"){
          const response: SearchTV[] = await searchResult(activeTab, query);
          if(response){
            data = response.map((item: SearchTV) => ({
              id: item.id,
              original_title: item.original_name,
              poster_path: item.poster_path,
              release_date: item.first_air_date,
              vote_average: item.vote_average,
              overview: item.overview
            }))
          }else{
            console.error("Error while fetching tv shows from backend")
          }
        }
      }catch(err){
        dispatch(setIsError());
      }
      dispatch(setResults(data));
    })();
  },[query, activeTab]);

  if(isError) return <h1> Error is present while fetching search results </h1>
  if(isLoading) return <h1> Loading... Data is fetching for the given query </h1>
  return( 
    <>
    {results.length === 0 ? (
              <h2 className="text-xl font-medium tracking-wide my-10"> No any  {activeTab === 'tv' ? "TV Shows" : "Movies"} present with name {query}... </h2>
      ):(
      <div className='flex flex-wrap ml-15 mt-5 gap-x-15 gap-y-10 justify-start items-center'>
        {results.map(item => <ResultCard key={item.id} item = {item} />)}
      </div>
      )
      }
    </>
      )
}

export default ResultGrid