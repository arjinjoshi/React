interface HeaderProps{
    title: string,
    description: string
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className="text-xl font-medium">{description}</p>
    </div>
  )
}

export default Header