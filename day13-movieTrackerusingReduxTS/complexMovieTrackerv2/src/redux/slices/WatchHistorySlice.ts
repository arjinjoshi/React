import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Search } from "./SearchListSlice";
import { toast, Zoom } from "react-toastify";

interface WatchHistoryCollection {
    watchHistoryCollection: Search[];
}

const stored = localStorage.getItem('watchHistoryCollection');

const initialState: WatchHistoryCollection = {
    watchHistoryCollection : stored ? JSON.parse(stored) as Search[] : []
} 

const WatchHistorySlice = createSlice({
    name: "watchhistory",
    initialState,
    reducers: {
        setWatchHistoryCollection: (state, action: PayloadAction<Search[]>) => {
            state.watchHistoryCollection = action.payload;
        },
        addToWatchHistoryCollection: (state, action: PayloadAction<Search>) => {
                const alreadyExist = state.watchHistoryCollection.find( item => item.id === action.payload.id)
                if(!alreadyExist){
                    state.watchHistoryCollection.push(action.payload);
                    localStorage.setItem('watchHistoryCollection', JSON.stringify(state.watchHistoryCollection));
                    toast.success('Added to Watch History Collection', {
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
        removeFromWatchHistoryCollection: (state,action: PayloadAction<number>) => {
                state.watchHistoryCollection = state.watchHistoryCollection.filter(
                    item => item.id !== action.payload
                )
                localStorage.setItem('watchHistoryCollection', JSON.stringify(state.watchHistoryCollection));
                toast.error('Removed from Watch History Collection', {
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
        clearwatchHistoryCollection: (state) => {
            state.watchHistoryCollection = [];
            localStorage.removeItem("watchHistoryCollection");
            toast.error('Watch History Cleared', {
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
    setWatchHistoryCollection,
    addToWatchHistoryCollection,
    removeFromWatchHistoryCollection,
    clearwatchHistoryCollection
} = WatchHistorySlice.actions;

export default WatchHistorySlice.reducer;