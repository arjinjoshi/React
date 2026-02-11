import Navlogo from "../assets/NavLogo.jpg"
import Navlogo2 from "../assets/NavLogo2.jpg"
import { NavLink } from "react-router"

const Header = () => {
  return (
    <div className=" w-full bg-white flex items-center justify-between">
      <div className="flex -ml-8">
        <div className="flex items-center mr-3" >
                <img src={Navlogo} className="h-25" alt="Hello" /> 
                <span className="text-2xl -ml-8 tracking-wide font-medium">rjin</span>
        </div>
        <div  className="flex items-center" >
                <img src={Navlogo2} className="h-10" alt="Hello" /> 
                <span className="text-2xl tracking-wide font-medium">oshi</span>
        </div>  
      </div>
      <div className="flex gap-8 font-semibold text-xl tracking-wider">
        <NavLink to="/" className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Home</NavLink>
        <NavLink to="/projects"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Project</NavLink>
        <NavLink to="/skills"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ''}`}>Skills</NavLink>
        <NavLink to="/contactme"  className={({ isActive }) =>
            ` ${isActive ? 'text-orange-500 ' : ' '}`}>Contact Me</NavLink>
      </div>
    </div>
  )
}

export default Header
