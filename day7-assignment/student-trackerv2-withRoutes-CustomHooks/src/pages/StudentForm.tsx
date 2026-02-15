import React, { useState } from "react";
import type { genderCategory, StudentData } from "../hooks/useStudentDetails"; 

import StudentCard from "../Components/StudentCard";
import useStudentDetails from "../hooks/useStudentDetails";



const StudentForm = () => {
  const {students, setStudents, deleteHandler} = useStudentDetails();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [gender, setGender] = useState<genderCategory>("Male");
  const [image_url, setImageUrl] = useState<string>("");


  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newStudent: StudentData = {
      id: crypto.randomUUID(),
      image_url,
      gender,
      name,
      address,
      phoneNumber,
    };

    setStudents([...students, newStudent]);

    setName("");
    setAddress("");
    setPhoneNumber("");
    setGender("Male");
    setPhoneNumber("");
    setImageUrl("");
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
          Add New User
        </button>
      </form>

      <div className="flex flex-row flex-wrap gap-10">
        {students.map((item) => (
          <div key={item.id}>
            <StudentCard deleteHandler={deleteHandler} eachStudent={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentForm;
