import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { type TodoType } from '../store/slice/todosSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addTodo, updateTodo } from '../store/slice/todosSlice';




const TodoForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>("");

  const todos = useAppSelector(state => state.todos.items);

    const activeTodo = useMemo(()=>{
      return todos.find(todo => todo.id === id);
    },[id, todos]) 

    useEffect(()=> {
      if(activeTodo){
        setDescription(activeTodo.text);
      }
    },[activeTodo]);

    const cancelHandler = () => {
      navigate(`/todolist/${id}`);
    }
  

  const onSubmitHandler = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(id){
      dispatch(updateTodo({id, text: description}));
      navigate("/");
    }else{
      const newTodo: TodoType = {
        id: id || crypto.randomUUID(),
        text: description,
        isCompleted: false
      }
      
      dispatch(addTodo(newTodo));

      // clearing form 
      setDescription("");
    }

  }
  return (
    <div className='flex justify-center mt-10'>
      <form className="p-5 flex flex-col gap-2 w-1/4" onSubmit={onSubmitHandler}>
        <input className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description '/>
        <button
          type="submit"
          className="border-2 border-gray-400 bg-blue-300 px-3 py-1 rounded-xl"
        >
          {id ? "Update Todo" : "Add Todo"}
        </button>
        {id && (
          <button
            type="button"
            onClick={cancelHandler}
            className="border-2 border-gray-400 bg-blue-300 px-3 py-1 rounded-xl"
          >
            Cancel
          </button>)}
      </form>
    </div>
  )
}

export default TodoForm