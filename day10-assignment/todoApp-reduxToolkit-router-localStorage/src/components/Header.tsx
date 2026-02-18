import { NavLink } from "react-router";
interface headerPropss{
    text: string;
}

const Header = ({ text }: headerPropss ) => {
  return (
    <div>
        <div className='flex justify-between items-center px-8 text-2xl py-5 bg-slate-700 text-gray-300'>
        <NavLink to={'/'} className={({isActive}) => isActive ? 'text-orange-600 ': ``} > {text} </NavLink>
            <div className="flex gap-15 mx-10">
                <NavLink to={'/todoform'} className={({isActive}) => isActive ? 'text-orange-600 ': ``} > Add </NavLink>
                <NavLink to={'/todolist'} className={({isActive}) => isActive ? 'text-orange-600 ': ``} > List </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Header