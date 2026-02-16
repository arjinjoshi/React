import { createContext, useContext, useEffect, useState } from "react";


export type genderCategory = "Male" | "Female" | "Non-Binary";

export interface StudentData {
  id: string;
  image_url: string;
  gender: genderCategory;
  name: string;
  address: string;
  phoneNumber: string;
}

const INITIAL_STUDENTS_DATA: StudentData[] = [
    {
      id: "user1",
      image_url: "https://avatars.githubusercontent.com/u/42716121?v=4",
      gender: "Male",
      name: "Gyanas Luitel",
      address: "Kathmandu, Nepal",
      phoneNumber: "9845677957",
    },
    {
      id: "user2",
      image_url: "https://avatars.githubusercontent.com/u/191872399?v=4",
      gender: "Male",
      name: "Nirajan Acharya",
      address: "Kathmandu, Nepal",
      phoneNumber: "9863446654",
    },
    {
      id: "user3",
      image_url: "https://avatars.githubusercontent.com/u/93420302?v=4",
      gender: "Male",
      name: "Kushal Bansal",
      address: "Kalimati, Kathmandu",
      phoneNumber: "9845677957",
    },
    {
      id: "user4",
      image_url: "https://avatars.githubusercontent.com/u/85009275?v=4",
      gender: "Female",
      name: "Katrina Kaif",
      address: "Bhaktapur, Nepal",
      phoneNumber: "9824347957",
    },
    {
      id: "user5",
      image_url: "https://avatars.githubusercontent.com/u/104689409?v=4",
      gender: "Male",
      name: "Arjin Joshi",
      address: "Kathmandu, Nepal",
      phoneNumber: "9826347957",
    },
  ];

interface StudentContextType {
    students: StudentData[];
    deleteHandler : (id: string) => void;
    updatedStudents : (studentarray: StudentData[]) => void;
    isEdit : boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    setStudents : React.Dispatch<React.SetStateAction<StudentData[]>>
}

function initialData() {
    const storedData = localStorage.getItem("totalStudents");
    if (storedData) {
      try {
        const totalStudentsParsed: StudentData[] = JSON.parse(storedData);
        return totalStudentsParsed;
      } catch (e) {
        // If parsing fails, reset to initial
        return INITIAL_STUDENTS_DATA;
      }
    } else {
      // If nothing in localStorage, initialize the initial data
      return INITIAL_STUDENTS_DATA;
    }
  }


// Creating a context with a default value of undefined => First Step

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const useStudentContext = () => {
    const context = useContext(StudentContext);

    if(!context){
        throw new Error("useStudentContext must be used within a BudgetContextProvider");
    }

    return context;
}


export const StudentContextProvider: React.FC<{children: React.ReactNode} > = ({children}) => {
    const [students, setStudents] = useState<StudentData[]>(initialData);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem("totalStudents", JSON.stringify(students));
      }, [students]);
      
    const deleteHandler = (id: string) => {
        setStudents(students.filter((item) => item.id !== id));
    }

    const updatedStudents = (studentarray: StudentData[]) => {
        setStudents(studentarray);
    }

    return (
        <StudentContext.Provider value = {{students, setStudents, deleteHandler, updatedStudents, isEdit,setIsEdit}}>
            {children}
        </StudentContext.Provider>
    )
}