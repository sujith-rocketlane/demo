import React from "react";
import Add from "./Components/add";
import Display from "./Components/display";
import Delete from "./Components/delete";
import Update from "./Components/update";
import "./App.css";
import "./navigator.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


const Navbar = (props) => {
    return (
        <div className = "navbar">
            <Router>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/add">Enroll</Link></li>
                    <li><Link to = "/display">View</Link></li>
                    <li><Link to = "/delete">Delete</Link></li>
                    <li><Link to = "/update">Update</Link></li>
                </ul>
                <Routes>
                    <Route path = "/" element = { <Home /> } />
                    <Route path = "/add" element = { <Add /> } />
                    <Route path = "/display" element = { <Display /> }></Route>
                    <Route path = "/delete" element = { <Delete /> }></Route>
                    <Route path = "/update" element = { <Update /> }></Route>
                </Routes>
            </Router>            
        </div>
    );
}

function Home(){
    return (
        <center>
            <div className = "home">
                <h1>Enroll in our club</h1>
            </div>
        </center>
    );
}


export default Navbar