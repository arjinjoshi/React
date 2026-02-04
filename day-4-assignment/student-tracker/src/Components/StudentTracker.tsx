import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { useState } from "react";

export type genderCategory = 'Male' | 'Female' | 'Non-Binary';

export interface StudentData {
  id : string;
  image_url: string;
  gender: genderCategory;
  name: string;
  address: string;
  phoneNumber: string;
}


const  INITIAL_STUDENTS_DATA : StudentData[] = [
  {
    id: 'user1',
    image_url: 'https://avatars.githubusercontent.com/u/42716121?v=4',
    gender: 'Male',
    name: 'Gyanas Luitel',
    address: 'Kathmandu, Nepal',
    phoneNumber: '9845677957'
  },
  {
    id: 'user2',
    image_url: 'https://avatars.githubusercontent.com/u/191872399?v=4',
    gender: 'Male',
    name: 'Nirajan Acharya',
    address: 'Kathmandu, Nepal',
    phoneNumber: '9863446654'
  },
  {
    id: 'user3',
    image_url: 'https://avatars.githubusercontent.com/u/93420302?v=4',
    gender: 'Male',
    name: 'Kushal Bansal',
    address: 'Kalimati, Kathmandu',
    phoneNumber: '9845677957'
  },
  {
    id: 'user4',
    image_url: 'https://avatars.githubusercontent.com/u/85009275?v=4',
    gender: 'Female',
    name: 'Katrina Kaif',
    address: 'Bhaktapur, Nepal',
    phoneNumber: '9824347957',
  },
  {
    id: 'user5',
    image_url: 'https://avatars.githubusercontent.com/u/104689409?v=4',
    gender: 'Male',
    name: 'Arjin Joshi',
    address: 'Kathmandu, Nepal',
    phoneNumber: '9826347957',
  },
] 



const StudentTracker = () => {
  const [students, setStudents] = useState<StudentData[]>(INITIAL_STUDENTS_DATA);


  function onClickHandler(newStudent: StudentData){

    setStudents([...students, newStudent]);
  
  }

  function onFilterHandler(filterdStudent: StudentData){
    setStudents(students.filter(item => item.id !== filterdStudent.id));
  }


  return (
    <div>
      <StudentForm clickHandler = {onClickHandler}/>
      <StudentList onStudentDelete={onFilterHandler} studentdetails = {students}/>
    </div>
  )
}

export default StudentTracker