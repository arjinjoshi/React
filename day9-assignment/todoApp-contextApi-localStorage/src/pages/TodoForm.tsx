import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useTodoContext, type TodoType } from '../context/studentContextProvider';




const TodoForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState<string>("");
  const {todos, setTodos} = useTodoContext();

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

    const eachTodo: TodoType = {
      id: id || crypto.randomUUID(),
      text: description,
      isCompleted: false
    }

    if(id){
      const updatedTodoArray = todos.map( todo => todo.id === id ? eachTodo: todo);
      setTodos(updatedTodoArray);
      navigate("/");
    }else{
      setTodos([...todos,  eachTodo]);

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