import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Search {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
}

interface Results{
    results: Search[];
    isLoading: boolean;
    isError: boolean;
    query: string;
    activeTab: string;
}

let initialState: Results  = {
    results: [],
    query: "",
    activeTab: "movie",
    isLoading: false,
    isError: false,
}

const searchListSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        setResults: (state, action: PayloadAction<Search[]>) => {
            state.results = action.payload;
            state.isLoading = false;
        },
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
        },
        setIsLoading: state => {
            state.isLoading = true;
            state.isError = false;
        }, 
        setIsError: state => {
            state.isError = true;
            state.isLoading = false;
        },
        clearResults: state => {
            state.results = [];
        }
    }

})

export const {
    setResults,
    setQuery,
    setActiveTab,
    setIsLoading,
    setIsError,
    clearResults,
} = searchListSlice.actions;

export default searchListSlice.reducer;