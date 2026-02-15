
import { useParams } from "react-router"
import type { StudentData } from "../hooks/useStudentDetails"
import { useNavigate } from "react-router";
import React, { useMemo, useState } from "react";

const StudentDetailEdit = () => {

    const {id } = useParams();
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

     const [form, setForm] = useState < StudentData | null> (student ? student : null)

        if (!form){
            return <h1 className="text-2xl">Item not found ...</h1>
        }

        const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const {name, value} = e.target;
            setForm( prev => prev ? { ...prev, [name]:value } : null);
        }

        const saveHandler = (e: React.FormEvent) => {
            e.preventDefault();

            if(!form){
                return;
            }

            try {
                const students = localStorage.getItem("totalStudents");
                if(students){
                    const parsedStudents: StudentData[] = JSON.parse(students);
                    const updatedStudents =  parsedStudents.map(item => item.id === form.id ? form : item);
                    localStorage.setItem("totalStudents", JSON.stringify(updatedStudents));
                }
                navigate("/");
            }catch(error){
                console.log("Error saving student data", error);
            }

        }

        const cancelHandler = () => {
            navigate(`/student/${id}`);
        }

  return (
        <div className="flex flex-col justify-center items-center my-8">
          <form
            className="p-5 flex flex-col gap-2 w-1/4"
            onSubmit={saveHandler}
          >
            <input
              className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name || ""}
              onChange={changeHandler}
              required
            />
            <input
              className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
              type="text"
              name="address"
              placeholder="Address"
              value={form.address || ""}
              onChange={changeHandler}
              required
            />
            <input
              className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
              type="text"
              name="phoneNumber"
              placeholder="Contact Number"
              value={form.phoneNumber || ""}
              onChange={changeHandler}
              required
            />
            <input
              className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={form.image_url || ""}
              onChange={changeHandler}
              required
            />
            <select
              className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
              name="gender"
              value={form.gender || ""}
              onChange={changeHandler}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            <button
              type="submit"
              className="border-2 border-gray-400 bg-blue-300 px-3 py-1 rounded-xl"
            >
              Save
            </button>
            <button
              type="button"
              onClick={cancelHandler}
              className="border-2 border-gray-400 bg-blue-300 px-3 py-1 rounded-xl"
            >
              Cancel
            </button>
          </form>
        </div>
  )
}

export default StudentDetailEdit
