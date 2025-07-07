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

let root1 = ReactDOM.createRoot(document.getElementById("root1"));
let bigParent = React.createElement("div",{id:"parent1"}, React.createElement("div",{id:"child1"},
   [
      React.createElement("h1",{class:"big"},"I am supreme"),
      React.createElement("h2",{class:"big"},"I am frontend")
   ],
   React.createElement("div",{id:"parent2"}, React.createElement("div",{id:"child2"},
      [
         React.createElement("h1",{class:"big2"},"I am smarter than upperOne"),
         React.createElement("h2",{class:"big2"},"I am backend")
      ]
   )
   )
)
);
root1.render(bigParent)
