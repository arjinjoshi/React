firstly run `code .` to open vs code on that directory from where you're running this command

Then run the `npm init -y` to get the node_modules

Then run the `npm install -D vite @vitejs/react-plugin`

And Then run the `npm install react react-dom`

And Then run the `npm install --save-dev typescript @types/react @types/react-dom`

And then Also `create a tsconfig.json file` inside which we gonna write some code

{
  "compilerOptions": {
    "module": "esnext",
    "target": "esnext",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
  },
  "include": ["./**/*"],
}



-----------------------------------------------------------------------------------

Now create a index.html file and add a `div with id="root" inside the body`

And then `create a folder named src, inside which create a file named App.jsx`

And then `update your scripts inside package.json `

Also update the scripts on package.json by adding "dev" as a key and it's value as a "vite" that means 

 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },

Also In package.json, `update the "type" : "module" `  from commonjs `because "commonjs" is depreciating` 


    

Now we can either use a same syntax as using createElement or we can switch to modern xml file syntax but We'll look `using the xml file and switching to modern syntax` in this folder 

---------------------------------------------------------------------------------------------
Since we have already installed vite and @vitejs/plugin-react
And then create a file named `vite.config.js`

`Updating vite.config.js`

Inside this: firstly, we have to `import {defineConfig} from "vite" and "react" from "@vitejs/plugin-react"` then `use it inside the defineConfig function which we'll be exporting `

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()], ` // make sure the react() this name matches the above name "react" imported from the '@vitejs/plugin-react' `
})



------------------------------------------------------------------------------------------


Now let's write the code inside our App.jsx component

first thing is we have to import {createRoot} from "react-dom/client"

because we'll be using it to create a root for our react code

`   import { createRoot } from "react-dom/client"   `

select the tag from index.html having id= "root" then make sure to wrap it with createRoot to make it a root component and make sure to assign it under a variable usually we call it a root 
Since we are using typescript we have to take it as HTMLElement

`   const root = createRoot(document.getElementById("root") as HTMLElement);  `

Now call .render() method on root and inside which we gonna pass <App/> component(function) which will be returning a "XML file" (html like file);


export default function App(){
    return <h1>Hello There</h1>
}


-----------------------------------------------------------------------------------------

now if we run `npm run dev` on terminal, we'll get local ip address through which we can see the rendered site 


---------------------------------------------------------------------------------------------

Now let's create another 'Card' component which will be taking props as input and display the data inside props which we gonna pass inside 'Card' component from App.js file 

So firstly we have to `create interface called CardProps for defining the type for interface `
-----------------------------------------------------------------------------------
interface CardProps{
    title:  string,
    description: string,
}
-----------------------------------------------------------------------------------

`   make sure to export the component Card from the "Card.jsx" which will be returning the div inside which there will be h1 tag that contains props.title and another p tag that contains props.description `

-----------------------------------------------------------------------------------
export default function Card(props: CardProps){
    return <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}
-----------------------------------------------------------------------------------
and always import the component "Card" before using it inside "App.jsx"

 
and make sure the root.render is rendering the </App> component
and the App function will be returning the main div inside which we gonna display Card component inside which we gonna pass `title = "Title1" description = "This is a description of Title 1 ` as props 

-----------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------

`And make sure the root.render is taking </App> component as an argument`





Now we gonna we how to do the same things with typescript without vite starter pack in the part3 folder 