import ResultGrid from "../components/ResultGrid"
import Searchbar from "../components/Searchbar"
import Tabs from "../components/Tabs"
import TrendingDatas from "../components/TrendingDatas"
import { useAppSelector } from "../hooks/hooks"


const HomePage = () => {
  const {query} = useAppSelector(store => store.search);
  return (
    <div className="w-full min-h-screen h-auto flex flex-col bg-[--var1]">
      <Searchbar/>
      {query !== '' 
      ? 
        <div> 
          <h2 className='text-3xl tracking-wider font-bold mb-5'>Search Results:</h2>  
             <Tabs/> 
             <ResultGrid/>
             <div className="mt-10">
              <TrendingDatas/>   
             </div>
        </div>
      : 
      <div>
        <TrendingDatas/>   
      </div>
        // <h2 className="text-xl font-medium tracking-wide my-10">Please enter the Movies or TV Shows that you want to search... </h2>
      }
      </div>
  )
}

export default HomePage