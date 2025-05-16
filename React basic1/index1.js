//If we want sibling of children then we use Array
//<div id = parents>
   // <div id = childs>
   //<h1> I am big one</h1>
   //<h2> I am small one</h2>
   // </div>
//</div>

let bigParent = React.createElement("div",{
    id:"parents"},React.createElement("div",{id:"childs"},
        [React.createElement("h1",{}, "I am big one")],
        [React.createElement("h2",{},"I am small one")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(bigParent)