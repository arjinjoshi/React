
import type { Search } from '../redux/slices/SearchListSlice'
import { useAppDispatch } from '../hooks/hooks';
import { addToWatchHistoryCollection } from '../redux/slices/WatchHistorySlice';
import { addToWatchListCollection } from '../redux/slices/WatchListSlice';


interface ResultCardProps {
    item: Search;
}

const ResultCard = ({item}: ResultCardProps) => {
    const dispatch = useAppDispatch();
  return (
    <div className="w-1/5 h-110 rounded-xl z-50 border-none relative group overflow-hidden transition-all duration-300 hover:scale-105">
      <img
        className="object-fill w-full h-full"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.original_title}
      />
      <div className="w-full absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl font-bold top-0 right-0 flex flex-wrap gap-5 p-2">
      <button onClick={ () => {
            dispatch(addToWatchListCollection(item));
           }} className='bg-(--var4) active:scale-95 text-white rounded px-3 py-1 font-medium '>
            + WatchList
      </button>
      <button onClick={ () => {
            dispatch(addToWatchHistoryCollection(item));
           }} className='bg-(--var4) active:scale-95 text-white rounded px-2 py-1 font-medium '>
            + Watched
      </button>
      </div>
      <div onClick={() => {
        const url:string = `https://www.themoviedb.org/${item.media_type}/${item.id}`;
        window.open (url, '_blank', 'noopener,noreferrer');
      }} className="cursor-pointer transition-all duration-200 text-(--var2) text-xl font-bold">
        <div className="absolute bottom-0 text-(--var2) inset-x-0 bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="mt-15 px-5 flex justify-between items-center text-sm">
            <p>{item.release_date?.split("-")[0]}</p>
            <p>{item.vote_average.toFixed(2)} ⭐️</p>
          </div>
          <div className="text-sm px-5 pt-3">{item.original_title}</div>
          <div className="text-sm px-5 pt-3 font-normal line-clamp-3">
            {item.overview}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard