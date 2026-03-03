import ResultGrid from "../components/ResultGrid"
import Searchbar from "../components/Searchbar"
import Tabs from "../components/Tabs"
import { useAppSelector } from "../hooks/hooks"


const HomePage = () => {
  const {query} = useAppSelector(store => store.search);
  return (
    <div className="w-full min-h-screen h-auto flex flex-col bg-[--var1]">
      <Searchbar/>
      {query !== '' 
      ? 
      <div> <Tabs/> <ResultGrid/> </div>
      : 
      ''    
        // <h2 className="text-xl font-medium tracking-wide my-10">Please enter the Movies or TV Shows that you want to search... </h2>
      }
      </div>
  )
}

export default HomePage