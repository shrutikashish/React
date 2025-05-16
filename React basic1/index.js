// we see here how we create react element and render in dom. 
// Now we see how we create nested element in dom through react.
// In dom we want create nested element like this
 //<div id = parent >
   // <div id = child>
   //<h1></h1>
   // </div>
//</div>
let parent = React.createElement("div",{
    id:"headers"}, React.createElement("div",{id:"child"},
        React.createElement("h1",{}, "I am h1 tag")));
const roots = ReactDOM.createRoot(document.getElementById("roots"));
roots.render(parent)


