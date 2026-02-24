import { NavLink } from "react-router"
const NavBar = () => {
  return (
    <div className=" bg-gray-700 flex items-center justify-between px-8 py-4">
      <div className="text-3xl">
        <NavLink to = "/" className={({isActive}) => (isActive) ?  'text-yellow-600' : 'text-yellow-500'}> Movie Tracker </NavLink>
      </div>
      <div className="text-2xl flex gap-x-8 px-5">
        <NavLink to = "/popular" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > Popular </NavLink>
        <NavLink to = "/toprated" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > Top Rated </NavLink>
        <NavLink to = "/nowplaying" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > Now Playing </NavLink>
        <NavLink to = "/upcoming" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > Upcoming </NavLink>
        <NavLink to = "/favorites" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > Favorites </NavLink>
        <NavLink to = "/watchlist" className={({isActive}) => (isActive) ? 'text-yellow-500': ''} > WatchList </NavLink>
      </div>
    </div>
  )
}

export default NavBar