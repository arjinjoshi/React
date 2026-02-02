import TaskItem from "../TaskItem/TaskItem";
import type { TodoItem } from "../TodoList/TodoList"
import './TaskList.css'

interface TaskListProps {
    tasks: TodoItem[];
    onToggle : (id: string) => void;
    onDelete : (id: string) => void;
}


const TaskList = ({tasks, onToggle, onDelete}: TaskListProps) => {
    if(tasks.length === 0){
        return (
            <div className="task-list">
                <p className="task-list__empty">NO tasks available. Please add a task.</p>
            </div>
        )
    }
  return (
    <div className="task-list">
            {tasks.map(task => 
               <TaskItem
                key={task.id} 
                id={task.id}
                title={task.title} 
                completed={task.completed} 
                onToggle ={onToggle} 
                onDelete={onDelete} 
                />
            )}
        </div>
  )
}

export default TaskList