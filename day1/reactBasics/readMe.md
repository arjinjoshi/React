Fistly just doing the thing by the scripts using cdn and all 

<!-- `Secondly now we gonna install locally` without using typeScript -->

Use this on html

 `<script type="importmap">`
  `      {  `
   `         "imports":{    `
    `            "react": "https://esm.sh/react",   `
     `           "react-dom/client": "https://esm.sh/react-dom/client"  `
      `      }  `
      `  }  `
   ` </script>  `

   Or you can also use this 
   `<script type="module" src="./src/index.js"> </script>`
    `<script type="module"> `
        `   import React from "https://esm.sh/react"    `
        `   import ReactDom from "https://esm.sh/react-dom/client"  `
    `</script>  `



And on the main file in which we are rendering root element use this

`   import {createElement} from "react";    `
`   import {createRoot} from "react-dom/client";    `
`   import App from "./app";    `

   const root = createRoot(document.getElementById("root"));   
   root.render(createElement("div", null, [  
    createElement("h1", {}, "Title"), 
    createElement("p", {}, "This is description haitw"),  
    ]));    


or if you want to export <App/> custom xml then use JSX file and for that 
    setup in the vite.config.js

  `  import { defineConfig } from "vite";   `   
  ` import react from  "@vitejs/plugin-react";  `

export default defineConfig({ 
    plugins: [react()],
});


Also update the scripts on package.json

"scripts": {
    "dev": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

`code .`
`npm init -y`
`npm i react react-dom`
`npm i vite @vitejs/plugin-react`
`npm run dev`