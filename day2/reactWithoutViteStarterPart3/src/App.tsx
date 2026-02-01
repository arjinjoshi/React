import { createRoot } from "react-dom/client";
import Card from "./Card";

export default function App(){
    return <>
        <Card title = "Title1" description="This is a description of title 1"></Card>
        <Card title = "Title2" description="This is a description of title 2"></Card>
        <Card title = "Title3" description="This is a description of title 3"></Card>
    </>
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App/>)