
interface HeaderProps{
    title: string;
}
const Header = ({title}: HeaderProps) => {
  return (
    <div className="flex mt-3 mb-12 justify-center items-center">
      <h1 className="text-3xl">{title}</h1>
    </div>
  )
}

export default Header
