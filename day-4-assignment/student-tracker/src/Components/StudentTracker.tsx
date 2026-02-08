import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { useState, useEffect } from "react";

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


function initialData(){
    const storedData = localStorage.getItem("totalStudents");

    if(storedData){
       try{
          const totalStudentsParsed: StudentData[] = JSON.parse(storedData);
          return totalStudentsParsed;
       }catch(e){
        // If parsing fails, reset to initial
        return INITIAL_STUDENTS_DATA;
       }
    }
    else{
      // If nothing in localStorage, initialize the initial data
      return INITIAL_STUDENTS_DATA;
    }
    
}

const StudentTracker = () => {
  const [students, setStudents] = useState<StudentData[]>(initialData);

  // useEffect(() => {
  //   // Load from local storage or initialize if not present
  //   const storedData = localStorage.getItem("totalStudents");

  //   if(storedData){
  //      try{
  //         const totalStudentsParsed: StudentData[] = JSON.parse(storedData);
  //         setStudents(totalStudentsParsed);
  //      }catch(e){
  //       // If parsing fails, reset to initial
  //       setStudents(INITIAL_STUDENTS_DATA);
  //       localStorage.setItem("totalStudents", JSON.stringify(INITIAL_STUDENTS_DATA));
  //      }
  //   }else{
  //     // If nothing in localStorage, initialize the initial data
  //     localStorage.setItem("totalStudents", JSON.stringify(INITIAL_STUDENTS_DATA));
  //   }
  // }, []);

  useEffect(() => {
    // // save to local storage
    // if (students.length === 0){
    //   return;
    // };
    localStorage.setItem("totalStudents", JSON.stringify(students))
  },[students]);
  

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