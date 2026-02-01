firstly run `code .` to open vs code on that directory from where you're running this command

Then run the `npm init -y` to get the node_modules

Now create a index.html file and add a `div with id="root" inside the body`

and add react cdn from any sites like  `esm react cdn` or `unpkg react cdn ` for now we'll use `esm react cdn`

then add their scripts inside body tag like: 



define script tag with `type = "importmap" `  and 
inside this script tag `make sure to open curly-brackets{}` like for object 
and make sure:  ` the the first "key" of object   should be "imports"` and then inside imports key which return object first  `key_name` can be anything (best practice `name it something based on that you are importing ` ) but make sure to enter the `esm_react_site_link correctly` and then similarly also declare another `key_name` say (react-dom/client) to import react dom property but make sure  the value contains `esm_react-dom/client_site_link` correctly like below

    <script type="importmap">
        {
            "imports":{
                "react": "https://esm.sh/react",
                "react-dom/client": "https://esm.sh/react-dom/client"
            }
        }

Then define `another script tag with type="module" ` because we're using modern import syntax of JS inside this script tag

then inside another script tag

import React from "above_defined_key" inside of "imports" object inside "script_tag" of type = "importMap" and make sure you are importing from the key that's value is "esm_react_site"

Similarly
import ReactDOM from "above_defined_key" inside of "imports" object inside "script_tag" of type = "importMap" and make sure you are importing from the key that's value is "esm_react-dom/client_site"

Like below: 

    <script type="module">
        import React from "react";
        import ReactDOM from "react-dom/client";
    </script>

    Now add another script tag in which we gonna use `createElement function from react`
    and also `createRoot function from reactdom 
    
<script type="module" src="./src/App.js"></script> // type is module to use modern js

And inside that App.js folder before using createRoot and createElement we have to import them 

We can import them by directly destructing the object or simply

Simply importing without destructuring 
`import React from "react";`
`import ReactDOM from "react-dom/client";`

NOW if i have to use createElement or createRoot then I have to write

`"React.createElement()"` and `"ReactDOM.createRoot()"`

`but we can directly destructure those object` while importing 

 we can import them by:
`import { createElement } from "react";`
`import {createRoot} from "react-dom/client";`

`Now directly we can use "createElement()" and "createRoot()" where we need them`


Now select the div with id = "root" from html file using getElementById() and then use `createRoot` on that to make it the` root of reactDOM` and assign it to `"const variable 'root'` " like

`const root = createRoot(document.getElementById("root"));`


Then create a simple element on react by using react method  `createElement()` .
It takes three parameters :
 tagName,
  props(properties/attributes just like in html),
  childrens(can be tag or array of tags or simple print message)
  like


  `let h1Element = createElement("h1",null,"This is simple heading tag");`
  `let h1Element = createElement("div",null,[
    createElement("h1",null,"Title1");
    createElement("p",null,"This is a description of a title1");
  ]);`


Now lastly we have to render that any element that we have created using createElement (say h1Element ) inside root using `root.render(element_name)    ` 

example


root.render(h1Element);

or root.render("hello");

or root.render(createElement("h1",null,"This is a heading 1");)

Now all of these are js file and we are using those file 

Now let's create a Component (js_function which returns xml) and render it using root.render



import { createElement } from "react";
import {createRoot} from "react-dom/client";

const App = () => {
    return createElement("div", {}, [
        createElement("h1", null, "Heading1"),
        createElement("p", {}, "This is detailed description of Heading1")
    ])
}

const root = createRoot(document.getElementById("root"));

root.render(createElement(App));


Now let's make another component "Card" in named Card.js inside src folder similarly like the app component

And make sure the Card component accept props which we gonna pass from App.js file in which we'll using that Card component

`and card component is return the same title and description using props logic that was returning by App component at first `

export default function Card(props){
    return createElement("div", {}, [
        createElement("h1", null, props.heading),
        createElement("p", {}, props.description)
    ])

}


Now just import the Card component to App.js
`import Card from "./Card";`

`and then make sure App is returning array of Cardcomponent and don't forget to pass different props value for each Card component using "createElement" and add the "description key with value" and "title key with value" inside "second parameter" of that "createElement function" like this` 

const App = () => {
    return createElement("div", {}, [
        createElement(Card, {title:"Title1", description: "This is a description of a title 1" }),
        createElement(Card, {title:"Title2", description: "This is a description of a title 2" }),
        createElement(Card, {title:"Title3", description: "This is a description of a title 3" })

    ])
}

const root = createRoot(document.getElementById("root"));

root.render(createElement(App));

Now what if we wanna change our file extension and syntax to modern easy .jsx file and syntax

JSX is a syntax extension for JavaScript that looks similar to HTML which allows us to write HTML like code within our Javascript files, which React then transforms into Javascript object
 
and In Typescript, we call it TSX, which is then compiled to Javascript.

For this we need the build tool like `vite =>modern build tool that provides a fast development environment for building web applications, including React apps.`
`offers features like hot module replacement (HMR) for quick feedback during development, optimized builds for production, and support for various frontend frameworks.`
using command in the terminal

`npm install -D vite @vitejs/plugin-react`

Vite: This is the engine(build tool). It handles the server, hot-reloading (refreshing the page instantly when you save), and bundling.

@vitejs/plugin-react: This is the specific instruction manual for Vite. It says: "When you see a .jsx file, use Babel or SWC to turn that JSX into React.createElement before sending it to the browser."

Then after installing these we again need to more things

Step 1: `Create the vite.config.js on the root folder`

Step 2: `Import {defineConfig} and react from "vite" and "@vitejs/plugin-react" `that means

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

then `from the same file export the function named defineConfig which takes plugins as key and on value it takes array whose first index have react() as value ` that means 

export default function defineConfig({
    plugins: [react()],
})

 

Previously, we were using an importmap to tell the browser to fetch React from a URL (esm.sh). Vite, however, doesn't use importmap by default. It looks for packages inside your local node_modules folder so we also need to install react and react-dom locally

Step 1: ` npm install react react-dom`

Vite is an intelligent bundler. Instead of the browser reaching out to a random website to grab React, Vite does the following:
It finds react in your node_modules.
It optimizes it (pre-bundles it) so it loads instantly.
It serves it to your browser from your own computer.


Step 2: Remove the <script type="importmap"> from your index.html. If it's still there, it might conflict with Vite's own internal module resolution. 

Step 3: Also Remove the tag with <script type="module"> where we have imported the "React" and "ReactDom" from the "react" and "react-dom/client"

Step 4: In modern React (especially with Vite), we don't actually need to import createElement anymore because we'll be using JSX. soo remove
`import { createElement } from "react"; ` . from "App.jsx"


And then update your scripts inside package.json 

Also update the scripts on package.json by adding "dev" as a key and it's value as a "vite" that means 

"scripts": {
    "dev": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  Then change your file name from .js to .jsx

`  changing App.js to App.jsx` 
`  and Card.js to Card.jsx`


And then update the path of App.js to App.jsx to script tag inside index.html

Now we can either use a same syntax as using createElement or we can switch to modern xml file syntax and 

We'll look `using the xml file and switching to modern syntax` in the next folder and similarly we also gonna see how` we'll again update vite.config.js` and also use `typescript`