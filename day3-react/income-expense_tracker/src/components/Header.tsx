interface Props {
    title: string;
    description: string;
}

const Header = ({ title, description }: Props) => {
    return (
        <header className="text-white flex flex-col items-center w-full gap-10 justify-between">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="font-medium text-xl">{description}</p>
        </header>
    );
}

export default Header;