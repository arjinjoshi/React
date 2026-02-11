import type React from "react"

const Contactme = () => {

    function submitHandler(e:React.FormEvent){
        e.preventDefault();
        return;
    }

  return (
    <div className="flex flex-col bg">
     <div className="flex flex-col mt-6">
        <div className="flex flex-col gap-5">
            <h1 className="text-orange-500 text-8xl tracking-wide">Contact Me</h1>
            <h2 className="text-6xl text-lightNavyBlue">Questions, thoughts, or just want to say hello?</h2>
        </div>
     </div>
     <div className="mt-10 bg-lightPinkCream w-full rounded-4xl my-10">
        <form onSubmit={submitHandler} className="flex flex-col justify-center items-stretch  rounded-3xl p-10 gap-8">
        <input className=" border-2 text-center border-gray-300 rounded-2xl px-10 py-3 shadow-lg"  type="text " placeholder="Enter your name" />
        <input className=" border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg" type="email" placeholder="Enter your email address" />
        <input className=" border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg" type="text" placeholder="Enter your subject" />
        <textarea className=" border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg" placeholder="Enter your message" cols={30} rows={10}></textarea>
        <button className='bg-bgOrange bg-orange-500 text-white text-left text-lg tracking-wide padding w-50 rounded-xl px- py-3'> <p className='text-center'>Hire Me</p></button>
     </form>
     </div>
     
    </div>
  )
}

export default Contactme
