import {createElement} from "react";
import {createRoot} from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("root"));

// const h1Element = createElement("div", null, [
//     createElement("h1", {}, "Title"),
//     createElement("p", {}, "This is description haitw"),
//     createElement("div", {}, createElement(App)),
    
// ]
    
// );

root.render(createElement(App));