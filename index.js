import React from "react";
import ReactDOM from "react-dom/client"

/* 
to make any app what we should now structure and what we  need to build
we make food app so here we need
 Header 
 -logo
 - nav items
 
 Body
 -Search
 -RestaurantContainer
 -RestaurantCard

 Footer
 -copyright
 -links
 -Address
 -Contacts
*/


const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img  className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdowOPjag-hQKDHQXhyue9wzFdZ9H1hLW09Q&s"></img>
         </div>
         <div className="nav-items">
         <ul>
            <li>Name</li>
            <li>About US</li>
            <li>Cart</li>
            <li>Contact Us</li>
         </ul>
         </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return (
        <div className="res-card" style = {{ backgroundColor: "#f0f0f0" }}>
            <img  className="res-logo"alt="res-logo"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"></img>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayOut = ()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>

    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

 
root.render(<AppLayOut />)