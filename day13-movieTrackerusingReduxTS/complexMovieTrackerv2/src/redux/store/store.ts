import { configureStore, } from "@reduxjs/toolkit";
import SearchReducer from "../slices/SearchListSlice";
import WatchHistoryReducer from "../slices/WatchHistorySlice";
import WatchListReducer from "../slices/WatchListSlice";

export const store = configureStore({
    reducer: {
        search: SearchReducer,
        watchHistory: WatchHistoryReducer,
        watchList: WatchListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;