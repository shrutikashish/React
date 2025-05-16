// If we want  to create 2 children and 2 sibling in dom through react
//<div id = parent >
   // <div id = child1>
     //<h1> h1 tag</h1>
      //<h2> h2 tag
   // </div>
    // <div id = child2>
     //<h1> h1 tag</h1>
      //<h2> h2 tag
   // </div>
//</div>
// here we see 2 h1 tag in child1 and 2 h2 tag in child2
const parent1 = React.createElement(
    "div",{id: "parent"},
   [ React.createElement("div",{id:"child1"},
       [ React.createElement("h1",{},"H1 is my tag"),
        React.createElement("h2",{},"H2 is my tag"),
       ]
    )
],
[ React.createElement("div",{id:"child2"},
    [ React.createElement("h1",{},"H1 is my tag"),
     React.createElement("h2",{},"H2 is my tag"),
    ]
 )
],
)
console.log(parent1)
const root1 = ReactDOM.createRoot(document.getElementById("root1"))
root1.render(parent1)