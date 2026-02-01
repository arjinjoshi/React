import Card from "./Card";
import { createElement } from "react";
import {createRoot} from "react-dom/client";

// let h1Element = createElement("h1",null,"This is simple heading tag");

const App = () => {
    return createElement("div", {}, [
        createElement(Card, { title:"Title1", description: "This is a description of a title 1" }),
        createElement(Card, { title:"Title2", description: "This is a description of a title 2" }),
        createElement(Card, { title:"Title3", description: "This is a description of a title 3" }),

    ])
}

const root = createRoot(document.getElementById("root"));

root.render(createElement(App));