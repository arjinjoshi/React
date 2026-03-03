import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-(--var5) py-2 px-5'>
        <div className='text-3xl font-bold tracking-wide'>
            <h2>ShowTracker</h2>
        </div>
        <div className='transition-all duration-300 flex gap-5 text-xl font-semibold tracking-wide'>
            <NavLink className={({ isActive }) => `py-0 active:scale-95 transition-all duration-200 tracking-wider px-2 rounded-lg ${isActive ? "bg-(--var4)" : "" }` } to = "/" > Home </NavLink>
            <NavLink className={({ isActive }) => `py-0  active:scale-95 transition-all duration-200  tracking-wider px-2 rounded-lg ${isActive ? "bg-(--var4)" : "" }` } to = "/movies" > Movies </NavLink>
            <NavLink className={({ isActive }) => `py-0  active:scale-95 transition-all duration-200  tracking-wider px-2 rounded-lg ${isActive ? "bg-(--var4)" : "" }` } to = "/tvseries" > TV Shows </NavLink>
            <NavLink className={({ isActive }) => `py-0  active:scale-95 transition-all duration-200  tracking-wider px-2 rounded-lg ${isActive ? "bg-(--var4)" : "" }` } to = "/watchhistory" > Watched </NavLink>
            <NavLink className={({ isActive }) => `py-0  active:scale-95 transition-all duration-200  tracking-wider px-2 rounded-lg ${isActive ? "bg-(--var4)" : "" }` } to = "/watchlist" > Watchlist </NavLink>
        </div>
    </div>
  )
}

export default Navbar