
import { Trash } from 'lucide-react';
import { useTodoContext } from '../context/studentContextProvider'
import { useNavigate } from 'react-router';


const TodoList = () => {
    const {todos, deleteHandler, handleToggle} = useTodoContext();

    const navigate = useNavigate();





  return (
    <div>
        {todos.map(
            todo => {
                return (
                <div key={todo.id} className='mt-10 flex flex-col justify-center items-center'>

                        <div className='w-300 bg-slate-400 rounded-2xl p-3 flex items-center justify-between px-10'>
                            <div className='flex gap-4 items-center'>
                                <input className='w-4 h-4 cursor-pointer' type="checkbox" checked = {todo.isCompleted} onChange={() => handleToggle(todo.id)} />
                                <h2 onClick={() => { navigate(`/todolist/${todo.id}`)}}  className={todo.isCompleted? `line-through text-gray-200`: `text-black`}>{todo.text}</h2>    
                            </div>
                            <Trash onClick={() => deleteHandler(todo.id)} size={25} color="#d33636" strokeWidth={2.0} />
                        
                    </div>
                </div>

                )
            }
        )}
    </div>
  )
}

export default TodoList