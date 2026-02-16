import React, { useEffect, useMemo, useState } from "react";
import type {
  genderCategory,
  StudentData,
} from "../context/studentContextProvider";
import { useStudentContext } from "../context/studentContextProvider";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, setStudents, updatedStudents } = useStudentContext();

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [gender, setGender] = useState<genderCategory>("Male");
  const [image_url, setImageUrl] = useState<string>("");

  const existingStudent = useMemo(() => {
    return students.find((item) => item.id === id);
  }, [id, students]);

  useEffect(() => {
    if (existingStudent) {
      setName(existingStudent.name);
      setAddress(existingStudent.address);
      setPhoneNumber(existingStudent.phoneNumber);
      setGender(existingStudent.gender);
      setImageUrl(existingStudent.image_url);
    }
  }, [existingStudent]);

  const cancelHandler = () => {
    navigate(`/student/${id}`);
  };

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const eachStudentData: StudentData = {
      id: id || crypto.randomUUID(), // Keep old ID if present else on editing, set the new one
      image_url,
      gender,
      name,
      address,
      phoneNumber,
    };

    if (id) {
      const updatedStudentsData = students.map((item) =>
        item.id === id ? eachStudentData : item
      );
      updatedStudents(updatedStudentsData); // updating localStorage as well as setting studentsArray
      navigate("/"); // redirect for edit page
    } else {
      setStudents([...students, eachStudentData]);

      // clearing the form for formpage
      setName("");
      setAddress("");
      setPhoneNumber("");
      setGender("Male");
      setPhoneNumber("");
      setImageUrl("");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <form
        className="p-5 flex flex-col gap-2 w-1/4"
        onSubmit={onSubmitHandler}
      >
        <input
          className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
          type="text"
          placeholder="Contact Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
          type="text"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <select
          className="border-2 border-gray-400 bg-gray-200 px-3 py-1 rounded-xl"
          value={gender}
          onChange={(e) => setGender(e.target.value as genderCategory)}
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
          {id ? "Update Student" : "Add Student"}
        </button>
        {id && (
          <button
            type="button"
            onClick={cancelHandler}
            className="border-2 border-gray-400 bg-blue-300 px-3 py-1 rounded-xl"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default StudentForm;
