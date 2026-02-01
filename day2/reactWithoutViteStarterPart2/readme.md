firstly run `code .` to open vs code on that directory from where you're running this command

Then run the `npm init -y` to get the node_modules

Then run the `npm install -D vite @vitejs/react-plugin`

And Then run the `npm install react react-dom`
-----------------------------------------------------------------------------------

Now create a index.html file and add a `div with id="root" inside the body`

And then `create a folder named src, inside which create a file named App.jsx`

And then `update your scripts inside package.json `

Also update the scripts on package.json by adding "dev" as a key and it's value as a "vite" that means 

"scripts": {
   ` "dev": "vite",`
    "test": "echo \"Error: no test specified\" && exit 1"
  },

Also `update the "type" : "module" ` from commonjs `because "commonjs" is depreciating` 

    

Now we can either use a same syntax as using createElement or we can switch to modern xml file syntax but We'll look `using the xml file and switching to modern syntax` in this folder 

---------------------------------------------------------------------------------------------

Updating vite.config.js

Inside this first we have to import {defineConfig} from "vite" and "react" from "@vitejs/plugin-react" then use it inside the defineConfig function which we'll be exporting 

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()], // make sure the react() this name matches the above name "react" imported from the '@vitejs/plugin-react'
})



------------------------------------------------------------------------------------------


Now let's write the code inside our App.jsx component

first thing is we have to import {createRoot} from "react-dom/client"

because we'll be using it to create a root for our react code

`   import { createRoot } from "react-dom/client"   `

select the tag from index.html having id= "root" then make sure to wrap it with createRoot to make it a root component and make sure to assign it under a variable usually we call it a root 

`   const root = createRoot(document.getElementById("root"));  `

Now call .render() method on root and inside which we gonna pass <App/> component(function) which will be returning a "XML file" (html like file);


export default function App(){
    return <h1>Hello There</h1>
}


-----------------------------------------------------------------------------------------

now if we run `npm run dev` on terminal, we'll get local ip address through which we can see the rendered site 


---------------------------------------------------------------------------------------------

Now let's create another 'Card' component which will be taking props as input and display the data inside props which we gonna pass inside 'Card' component form App.js file 

make sure to export the component Card from the "Card.jsx"
and always import the component "Card" before using it inside "App.jsx"

Now we gonna we how to do the same things with typescript without vite starter pack in the part3 folder 