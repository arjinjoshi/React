import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";


export interface TodoItem{
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem[] = [
    {
        id: "task1",
        title: "Go to Web Dev Class",
        completed: false,
    },
    {
        id: "task2",
        title: "Complete Expense Tracker Assignment",
        completed: false,
    }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);

    const handleTaskAdd = (title:string) => {
        const newTask: TodoItem = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }
        setTasks(prevTasks => [...prevTasks,newTask]);
    } 



    // Function to toggle task completion status
    const handleToggleTaskCompletion = (id: string) => {
        // Logic to toggle the 'completed' status of the task with the given id. We return a new array with the updated tasks
        const updatedTasks = tasks.map(item => {
            const taskToMatch = item.id === id;

            if (taskToMatch) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            else {
                return item;
            }
        });

        setTasks(updatedTasks);
    }

    // Function to delete a task
    const handleDeleteTask = (id: string) => {
        // Logic to remove the task with the given id from the tasks array
        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);
    }

  return (
    // <div>
    //     {tasks.map((taskItem:TodoItem)=>
    //         <div key={taskItem.id}>
    //             <p>{taskItem.title} <span>{taskItem.completed ? "Completed" : "Incomplete"}</span></p>
    //         </div>
    //     )}
    // </div>
    <div>
        <TaskForm onAdd={handleTaskAdd} />
        <TaskList tasks={tasks} onToggle={handleToggleTaskCompletion} onDelete={handleDeleteTask} />
    </div>
  )
}

export default TodoList