//If we want sibling of children then we use Array
//<div id = parents>
// <div id = childs>
//<h1> I am big one</h1>
//<h2> I am small one</h2>
// </div>
//</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
const middleParent = React.createElement(
    "div",{id: "parent"},
    React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{class:"middle"},"I am big one"),
        React.createElement("h2",{class:"middle"},"I am small one"),
       ]
    )

)
root.render(middleParent)





