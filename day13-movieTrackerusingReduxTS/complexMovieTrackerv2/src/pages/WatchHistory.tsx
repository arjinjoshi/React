import { useAppDispatch, useAppSelector } from "../hooks/hooks" 
import CollectionCard from "../components/CollectionCard";
import { clearwatchHistoryCollection } from "../redux/slices/WatchHistorySlice";

const WatchHistory = () => {

  const { watchHistoryCollection } = useAppSelector(store => store.watchHistory)
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-full my-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="px-3 py-1 text-3xl font-medium tracking-wider text-(--var2) inline rounded-lg">Already Watched</h2>
        <button onClick={() => dispatch(clearwatchHistoryCollection())} className="px-3 cursor-pointer active:scale-95 transition-all duration-200 bg-(--var4) text-2xl font-medium tracking-wider text-(--var2) inline rounded-lg"> Clear All </button>     
      </div>
      <div className="w-full flex flex-wrap gap-y-10 ml-8 gap-x-15">
        {watchHistoryCollection.map( (item) => <CollectionCard item = {item} currentTab="watchhistory"/> )}
      </div>
    </div>
  )
}

export default WatchHistory