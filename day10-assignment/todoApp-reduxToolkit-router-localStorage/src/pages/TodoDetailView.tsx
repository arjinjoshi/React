import { Trash, Edit } from 'lucide-react';
import { useParams } from 'react-router'
import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { deleteTodo, toggleTodo } from '../store/slice/todosSlice';

const TodoDetailView = () => {
    const {id} = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const todos = useAppSelector(state => state.todos.items);

    const activeTodo= useMemo(()=>{
        return todos.find(todo => todo.id === id);
    },[id, todos]);

    if(!activeTodo){
        return <div className='text-4xl'>Todo not found</div>
    }

    const onDelete = (id:string)=>{
        dispatch(deleteTodo(id));
        navigate("/");
    }

    const editHandler = () => {
        navigate(`/todolist/${id}/edit`);
    }


  return (
    <div className='mt-10 flex flex-col justify-center items-center'>

                        <div className='w-300 bg-slate-400 rounded-2xl p-3 flex items-center justify-between px-10'>
                            <div className='flex gap-4 items-center'>
                                <input className='w-4 h-4 cursor-pointer' type="checkbox" checked = {activeTodo.isCompleted} onChange={() => dispatch(toggleTodo(activeTodo.id))} />
                                <h2 className={activeTodo.isCompleted? `line-through text-gray-200`: `text-black`}>{activeTodo.text}</h2>    
                            </div>
                            <div className='display flex gap-5 items-center'>
                                <Edit onClick={editHandler} size={23} color="#298e75" strokeWidth={2.0} />
                                <Trash onClick={() => onDelete(activeTodo.id)} size={25} color="#d33636" strokeWidth={2.0} />
                            </div>


                    </div>
                </div>
  )
}

export default TodoDetailView