import React, { use, useState } from 'react'
import type { genderCategory, StudentData } from './StudentTracker';

interface onClickHandlerProps{
  clickHandler: (newStudent: StudentData)=> void;
}

const StudentForm = ({clickHandler}: onClickHandlerProps) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [gender, setGender] = useState<genderCategory>('Male');
  const [image_url, setImageUrl] = useState<string>('');

  function onSubmitHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const newStudent = {
      id: crypto.randomUUID(),
      image_url,
      gender,
      name,
      address,
      phoneNumber
    }

    clickHandler(newStudent);
    setName('');
    setAddress('');
    setPhoneNumber('');
    setGender('Male');
    setPhoneNumber('')
  }

  return (
    <form className='p-2 flex justify-between mb-10' onSubmit={onSubmitHandler}>
      <input className='border-2 border-gray-400 bg-gray-200 px-2' type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/>
      <input className='border-2 border-gray-400 bg-gray-200 px-2' type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} required/>
      <input className='border-2 border-gray-400 bg-gray-200 px-2' type="text" placeholder='Contact Number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required/>
      <input className='border-2 border-gray-400 bg-gray-200 px-2' type="text" placeholder='Image URL' value={image_url} onChange={e => setImageUrl(e.target.value)} required/>
      <select className='border-2 border-gray-400 bg-gray-200 px-2' value={gender} onChange={e => setGender(e.target.value as genderCategory)} required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
      </select>
      <button type='submit' className='border-2 border-gray-400 bg-blue-300 px-2'>Add New User</button>
    </form>
  )
}

export default StudentForm