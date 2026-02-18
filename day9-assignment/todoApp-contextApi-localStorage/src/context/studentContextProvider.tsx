import React, { createContext, useContext, useEffect, useState } from "react";


export interface TodoType{
    id: string;
    text: string;
    isCompleted: boolean;
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

function initialState(){
    const storedData = localStorage.getItem("todos");
    if(storedData){
        try{
            const parsedData: TodoType[] = JSON.parse(storedData);
            return parsedData;
        }catch(e){
            return todos;
        }
    }else{
        return todos;
    }
}

// defining the type for Context

export interface TodoContextType{
    todos: TodoType[];
    setTodos:  React.Dispatch<React.SetStateAction<TodoType[]>>;
    deleteHandler: (id:string) => void;
    handleToggle: (id:string) => void;
    
}

// Creating a context 
const TodoContext = createContext<TodoContextType | undefined>(undefined);


// Creating a hook for provider

export const TodoContextProvider:React.FC<{children: React.ReactNode}> = ({children}) =>{
    const [todos,setTodos] = useState<TodoType[]>(initialState);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]);

    const deleteHandler = (id:string)=> {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleToggle = (id: string) => {
        setTodos( prevTodos => prevTodos.map( todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    return (
        <TodoContext.Provider value = {
            {todos,
            setTodos,
            deleteHandler,
            handleToggle
        }
        }>
            {children}
        </TodoContext.Provider>
    )

}

// Creating a hook to useContext 

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if(!context){
        throw new Error ("useTodoContext must be used within a TodoContextProvider i.e children must be wrapped with Provider before using context there");
    }
    return context;
}