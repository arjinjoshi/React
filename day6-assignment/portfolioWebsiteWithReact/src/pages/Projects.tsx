import StudentTracker from "../assets/studentTracker.png"
import Stopwatch from "../assets/stopwatch.png"
import { NavLink } from "react-router"

const Projects = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className='text-8xl text-orange-500 text-center'>Projects</h1>
      
        <div>
        <p className=" text-3xl font-semibold tracking-wide  text-orange-500 mb-5">Student Tracker:</p> 
        <NavLink to = "https://github.com/arjinjoshi/React/tree/main/day5-assignment/02-complexStopWatch">
          <img src={StudentTracker} className="shadow-slate-300 shadow-2xl -z-1" alt="" />
          <p className="mt-10 text-lg font-medium tracking-wide">
    This Student Tracker is a streamlined React application that utilizes a modern Tailwind CSS dark-themed interface to manage and display student records effectively. It features a centralized form for capturing student details - such as names, locations, and profile images - which are then rendered as interactive cards. By leveraging LocalStorage, the app ensures that all student data remains persistent and accessible even after the browser is refreshed.
          </p>    
        </NavLink>
        </div>        
  

      
        <div>
        <p className=" text-3xl font-semibold tracking-wide  text-orange-500 mb-5">Stopwatch:</p> 
        <NavLink to="https://github.com/arjinjoshi/React/tree/main/day-4-assignment/student-tracker">
          <img src={Stopwatch} className="shadow-slate-300 shadow-2xl -z-1" alt="" />
          <p className="my-10 text-lg font-medium tracking-wide">
          This Stopwatch is a high-precision React utility that uses Tailwind CSS for a sharp, minimalist aesthetic and LocalStorage to preserve the timer state across browser sessions. It features a bold, centered display with intuitive Start, Stop, and Reset controls, allowing for seamless time tracking. By syncing the current elapsed time to the browser's storage, the app ensures that your progress is never lost, even if the tab is closed or the page is refreshed.
          </p>
        </NavLink>
        </div>        
      
        <div className='text-lightGray text-9xl select-none -ml-45 -mb-10'>
             Projects
        </div>
    </div>
  )
}

export default Projects
