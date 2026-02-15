import { useParams } from "react-router"
import useStudentDetails from "../hooks/useStudentDetails";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import type { StudentData } from "../hooks/useStudentDetails"; 
import { Edit, Trash } from "lucide-react";


const StudentDetailView = () => {

    const { id } = useParams();
    const {deleteHandler} = useStudentDetails();
    const navigate = useNavigate();

     const student = useMemo(
        ()=> {
            const students = localStorage.getItem("totalStudents");
            if(students){
                const parsedStudents: StudentData[] = JSON.parse(students);
                return parsedStudents.find(item => item.id === id);
            }
            return null;
        },  [id]
     )

     const onDelete = (id: string) => {
        try{
            deleteHandler(id);
            navigate("/");
        }catch(error){
            console.log("Error deleting item: ", error);
        }
     }

     const editHandler = () => {
        navigate(`/student/${id}/edit`);
     }

     if (!student){
        return <div> Student not found </div>
     }



  return (
    <div className="flex justify-center items-center h-screen">

      <div className="flex flex-col m-10 h-100 text-stone-200 w-80 p-4 border-2 border-gray-500 rounded-2xl ">
        <ul className="flex justify-end gap-3">
            <button onClick = { () => onDelete(student.id) }>
            <Trash size={28} color="#e66060" strokeWidth={1.75} />
                
            </button>
            <button onClick={editHandler}>
                <Edit size={25} color="#fff" strokeWidth={1.75} />
            </button>

            </ ul >

            <ul className="flex flex-col items-center">
                <li className="w-30 rounded-full h-30 overflow-hidden">
                    <img src={student.image_url} alt="img" />
                </li>
                <div className="flex flex-col gap-2 p-2 items-center">
                    <h1 className="text-3xl font-extrabold tracking-wider">
                        {student.name}
                    </h1>
                    <h2 className="text-xl font-semibold tracking-wider">
                        {student.address}
                    </h2>
                    <h3 className="text-md font-semibold tracking-wider">
                        {student.gender}, <span>{student.phoneNumber}</span>
                    </h3>
                </div>
            </ul>      
        </div>

    </div>
  )
}

export default StudentDetailView
