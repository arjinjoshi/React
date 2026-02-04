import { useState } from 'react';
import type { StudentData } from './StudentTracker'
import StudentCard from './StudentCard';

interface studentListProps{
    studentdetails: StudentData[];
    onStudentDelete : (student: StudentData) => void
}

const StudentList = ({studentdetails, onStudentDelete}: studentListProps) => {
    function deleteHandler(student: StudentData){
        onStudentDelete(student);
    }

  return (
    <div className='flex flex-row flex-wrap gap-10'>
        {studentdetails.map(item => 
        <StudentCard deleteHandler={deleteHandler}  key={item.id} eachStudent = {item} />
            )}
    </div>
  )
}

export default StudentList