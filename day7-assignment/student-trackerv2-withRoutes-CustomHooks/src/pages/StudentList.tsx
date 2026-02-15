import StudentCard from "../Components/StudentCard";

import useStudentDetails from "../hooks/useStudentDetails";


const StudentList = () => {
  const {students, deleteHandler} = useStudentDetails();

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
