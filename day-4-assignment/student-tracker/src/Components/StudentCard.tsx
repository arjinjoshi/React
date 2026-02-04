import React from 'react'
import type { StudentData } from './StudentTracker'
import { Trash } from 'lucide-react';

interface eachStudentProps{
    eachStudent: StudentData;
    deleteHandler: (eachStudent: StudentData) => void
}


const StudentCard = ({eachStudent, deleteHandler}: eachStudentProps ) => {

    function onDelete(){
        deleteHandler(eachStudent);
    }

  return (
    <div className='flex flex-col h-100 w-80 p-2 border-2 rounded-2xl border-gray-200'>
        <div className='text-end'>
            <button onClick={onDelete}><Trash size={28} color="#932a2a" strokeWidth={1.75} /></button>
        </div>
        <div className='flex flex-col items-center'>
            <div className='w-30 rounded-full h-30 overflow-hidden'>
                <img src={eachStudent.image_url} alt="https://cdn.dribbble.com/userupload/21261810/file/original-7937c14b24c9dadec626bac37033c775.png?resize=752x564&vertical=center" />
            </div>
            <div className='flex flex-col gap-2 p-2 items-center'>
                <h1 className='text-3xl font-extrabold'>{eachStudent.name}</h1>
                <h2 className='text-xl font-semibold'>{eachStudent.address}</h2>
                <h3 className='text-md font-semibold'>{eachStudent.gender}, <span>{eachStudent.phoneNumber}</span></h3>
            </div>
        </div>
         
    </div>
   
  )
}

export default StudentCard