import type { StudentData } from "../hooks/useStudentDetails";
import { Trash } from "lucide-react";

interface StudentCardProps {
  eachStudent: StudentData;
  deleteHandler: (studentId: string) => void;
}

const StudentCard = ({ eachStudent, deleteHandler }: StudentCardProps) => {
  function onDelete() {
    deleteHandler(eachStudent.id);
  }

  return (
    <div className="flex flex-col m-10 h-100 text-stone-200 w-80 p-4 border-2 border-gray-500 rounded-2xl ">
      <div className="text-end">
        <button onClick={onDelete}>
          <Trash size={28} color="#e66060" strokeWidth={1.75} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-30 rounded-full h-30 overflow-hidden">
          <img src={eachStudent.image_url} alt="img" />
        </div>
        <div className="flex flex-col gap-2 p-2 items-center">
          <h1 className="text-3xl font-extrabold tracking-wider">
            {eachStudent.name}
          </h1>
          <h2 className="text-xl font-semibold tracking-wider">
            {eachStudent.address}
          </h2>
          <h3 className="text-md font-semibold tracking-wider">
            {eachStudent.gender}, <span>{eachStudent.phoneNumber}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
