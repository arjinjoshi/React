import CollectionCard from "../components/CollectionCard";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { clearWatchListCollection } from "../redux/slices/WatchListSlice";

const WatchList = () => {

  const { watchListCollection } = useAppSelector(store => store.watchList)
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-full my-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="px-3 py-1 text-3xl font-medium tracking-wider text-(--var2) inline rounded-lg">Need to Watch </h2>
        <button onClick={() => dispatch(clearWatchListCollection())} className="px-3 cursor-pointer active:scale-95 transition-all duration-200 bg-(--var4) text-2xl font-medium tracking-wider text-(--var2) inline rounded-lg"> Clear All </button>     
      </div>
      <div className="w-full flex flex-wrap ml-8 gap-y-10 gap-x-15">
        {watchListCollection.map( (item) => <CollectionCard item = {item} currentTab="watchlist"/> )}
      </div>
    </div>
  )
}

export default WatchList