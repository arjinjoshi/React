// Redux store => This file configures the Redux store and adds all slice reducers

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

// To sync to localStorage here we use subscribe removing useEffect

store.subscribe(()=>{
    localStorage.setItem("todos", JSON.stringify(store.getState().todos.items));
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;