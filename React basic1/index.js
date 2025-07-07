// we see here how we create react element and render in dom. 
// Now we see how we create nested element in dom through react.
// In dom we want create nested element like this
 //<div id = parent >
   // <div id = child>
   //<h1></h1>
   // </div>
//</div>

let roots= ReactDOM.createRoot(document.getElementById("roots"));
let parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}),
             React.createElement("h1",{id:"headings"},"I am an h1 tag")
)
roots.render(parent)



