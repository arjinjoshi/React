import { NavLink } from "react-router";

interface HeaderProps {
    title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className="p-4  text-stone-300 bg-slate-800 flex justify-between">
        <h1 className="text-3xl p-2 font-extrabold tracking-wide">{title}</h1>
        <div className="flex gap-10 pr-10">
          <NavLink to="/studentform" className={({ isActive }) =>
            `p-2 text-2xl tracking-wider font-semibold ${isActive ? 'text-rose-400 ' : 'text-stone-300 '}`}>Add
          </NavLink>
          <NavLink className={({ isActive }) =>
            `p-2 text-2xl tracking-wider font-semibold ${isActive ? 'text-rose-400 ' : 'text-stone-300 '}`} to="/studentlist">List</NavLink>
        </div>
    </div>
  )
}

export default Header