import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { setQuery } from '../redux/slices/SearchListSlice';

const Searchbar = () => {
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText("");
    }

  return (
    <form onSubmit={(e) => submitHandler(e)}  className='flex flex-col my-2'>
        <div className='flex pt-10 gap-5 justify-center'>
            <input className='border w-1/6 px-10 py-2 rounded-lg border-(--var2)' onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder='Search for movies, tvshows ...'/>
            <button className='active:scale-95  cursor-pointer px-4 py-2 text-xl rounded-lg bg-(--var4)'> Submit </button>
        </div>
    </form>
  )
}

export default Searchbar