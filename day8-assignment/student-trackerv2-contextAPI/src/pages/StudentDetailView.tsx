import { useParams } from "react-router"
import { useNavigate } from "react-router";
import { useMemo } from "react"; 
import { Edit, Trash } from "lucide-react";
import { useStudentContext } from "../context/studentContextProvider";


const StudentDetailView = () => {

    const { id } = useParams();
    const {deleteHandler, students} = useStudentContext();
    const navigate = useNavigate();

    const student = useMemo(
        ()=> {
          if(students){
            return students.find(item => item.id === id);
          } 
          return null;
        },  [id, students]
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

        <div className="flex items-center justify-center h-screen">

            <div className="flex flex-col h-150 text-stone-200 w-120 p-4 border-2 border-gray-500 rounded-2xl ">
            <ul className="flex justify-end gap-3">
                <button onClick = { () => onDelete(student.id) }>
                <Trash size={34} color="#e66060" strokeWidth={1.75} />
                    
                </button>
                <button onClick={editHandler}>
                    <Edit size={32} color="#fff" strokeWidth={1.75} />
                </button>

                </ ul >

                <ul className="flex flex-col items-center">
                    <li className="w-80 rounded-full h-80 overflow-hidden">
                        <img src={student.image_url} alt="img" />
                    </li>
                    <div className="flex flex-col mt-5 gap-2 p-2 items-center">
                        <h1 className="text-4xl font-extrabold tracking-wider">
                            {student.name}
                        </h1>
                        <h2 className="text-2xl font-semibold tracking-wider">
                            {student.address}
                        </h2>
                        <h3 className="text-xl font-semibold tracking-wider">
                            {student.gender}, <span>{student.phoneNumber}</span>
                        </h3>
                    </div>
                </ul>      
            </div>

        </div>  

  )
}

export default StudentDetailView
