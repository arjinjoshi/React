interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div className="mt-3 flex flex-col justify-between items-center">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="text-xl font-medium">{description}</p>
    </div>
  )
}

export default Header