import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Search } from "./SearchListSlice";
import { toast, Zoom } from "react-toastify";

interface WatchListCollection {
    watchListCollection: Search[];
}

const stored = localStorage.getItem('watchListCollection');

const initialState: WatchListCollection = {
    watchListCollection : stored ? JSON.parse(stored) as Search[] : []
} 

const WatchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        setwatchListCollection: (state, action: PayloadAction<Search[]>) => {
            state.watchListCollection = action.payload;
        },     
        addToWatchListCollection: (state, action: PayloadAction<Search>) => {
            const alreadyExist = state.watchListCollection.find( item => item.id === action.payload.id)
            if(!alreadyExist){
                state.watchListCollection.push(action.payload);
                localStorage.setItem('watchListCollection', JSON.stringify(state.watchListCollection));
                toast.success('Added to Watchlist Collection', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark", 
                    transition: Zoom,
                });   
            }
        },
        removeFromWatchListCollection: (state,action: PayloadAction<number>) => {
            state.watchListCollection = state.watchListCollection.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('watchListCollection', JSON.stringify(state.watchListCollection));
            toast.error('Removed from Watchlist Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark", 
                transition: Zoom,
            });
        },
        clearWatchListCollection: (state) => {
            state.watchListCollection = [];
            localStorage.removeItem("watchListCollection");
            toast.error('Watchlist Cleared', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark", 
                transition: Zoom,
            });
        }
    }
})


export const {
    setwatchListCollection,
    addToWatchListCollection,
    removeFromWatchListCollection,
    clearWatchListCollection
} = WatchListSlice.actions;

export default WatchListSlice.reducer;