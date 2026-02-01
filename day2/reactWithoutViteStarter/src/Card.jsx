import { createElement } from "react";

export default function Card(props){
    return createElement("div", {}, [
        createElement("h1", null, props.title),
        createElement("p", {}, props.description)
    ])

}
