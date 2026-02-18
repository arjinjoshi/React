import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface TodoType{
    id: string;
    text: string;
    isCompleted: boolean;
}

// Defining the state shape
interface TodoState {
    items: TodoType[];
}

let todos: TodoType[] = [
    {
        id : "todo1",
        text : "Go to Gym",
        isCompleted: false
    },
    {
        id : "todo2",
        text : "Wake Up at 7 A.M",
        isCompleted: false
    },
    {
        id : "todo3",
        text : "Eat Breakfast",
        isCompleted: false
    },
    {
        id : "todo4",
        text : "Go to work",
        isCompleted: false
    },
    {
        id : "todo5",
        text : "10 hours coding",
        isCompleted: false
    },
]


// For loading the data from localStorage if present 
const loadInitialState  = () : TodoType[] =>  {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) :  todos;
}


const initialState: TodoState = {
    items: loadInitialState(),
}


const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        // Redux toolkits uses Immer, so that we can write mutating logic
        addTodo: (state, action: PayloadAction<TodoType>) =>{
            state.items.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<string>)=>{
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
            const todo = state.items.find(t => t.id === action.payload.id);
            if (todo) {
              todo.text = action.payload.text; 
            }
          },
        toggleTodo: (state, action:PayloadAction<string>)=>{
            const todo = state.items.find(todo => todo.id === action.payload);
            if(todo){
                todo.isCompleted = !todo.isCompleted;
            }
        },
    },
});

export const {addTodo, deleteTodo, toggleTodo, updateTodo} = todosSlice.actions;
export default todosSlice.reducer;