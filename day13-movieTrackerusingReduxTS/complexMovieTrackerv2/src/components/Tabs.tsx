
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setActiveTab } from '../redux/slices/SearchListSlice';

const Tabs = () => {
    const currentTab = ["movie", "tv"];
    const dispatch = useAppDispatch();
    const { activeTab } = useAppSelector(store => store.search);

  return (
    <div className='flex gap-5'>
        {currentTab.map((item, idx) => <button key={idx} onClick={() => dispatch(setActiveTab(item))} className = {`py-1 text-xl px-2 rounded-lg ${activeTab === item ? "bg-(--var4)" : ""}`}> {item === "movie" ? "Movies" : "TV Shows"} </button>)}
    </div>
  )
}

export default Tabs