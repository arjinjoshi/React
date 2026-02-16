import StudentCard from "../Components/StudentCard";
import { useStudentContext } from "../context/studentContextProvider";



const StudentList = () => {
  const {students, deleteHandler} = useStudentContext();

  return (
    <div className="flex flex-row flex-wrap ">
      {students.map((item) => (
        <StudentCard
          deleteHandler={deleteHandler}
          key={item.id}
          eachStudent={item}
        />
      ))}
    </div>
  );
};

export default StudentList;
