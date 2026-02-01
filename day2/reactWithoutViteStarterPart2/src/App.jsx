import { createRoot } from "react-dom/client";
import Card from "./Card";

export default function App(){
    return <>
        <Card title = "Title 1" description = "This is a description of Title1"></Card>
        <Card title = "Title 2" description = "This is a description of Title2"></Card>
        <Card title = "Title 3" description = "This is a description of Title3"></Card>
    </>
}

const root = createRoot(document.getElementById("root"));

root.render(<App/>);