interface CardProps{
    title:  string,
    description: string,
}

export default function Card(props: CardProps){
    return <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}