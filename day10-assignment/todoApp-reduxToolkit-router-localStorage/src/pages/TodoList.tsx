
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { deleteTodo, toggleTodo } from '../store/slice/todosSlice';


const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.items);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();





  return (
    <div>
        {todos.map(
            todo => {
                return (
                <div key={todo.id} className='mt-10 flex flex-col justify-center items-center'>

                        <div className='w-300 bg-slate-400 rounded-2xl p-3 flex items-center justify-between px-10'>
                            <div className='flex gap-4 items-center'>
                                <input className='w-4 h-4 cursor-pointer' type="checkbox" checked = {todo.isCompleted} onChange={() => dispatch(toggleTodo(todo.id))} />
                                <h2 onClick={() => { navigate(`/todolist/${todo.id}`)}}  className={todo.isCompleted? `line-through text-gray-200`: `text-black`}>{todo.text}</h2>    
                            </div>
                            <Trash onClick={() => dispatch(deleteTodo(todo.id))} size={25} color="#d33636" strokeWidth={2.0} />
                        
                    </div>
                </div>

                )
            }
        )}
    </div>
  )
}

export default TodoList