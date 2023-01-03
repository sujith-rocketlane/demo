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


const Feature1 = () => {
    return (
        <h1> i am in feature1 page </h1>
    );

}

const Feature2 = () => {
    return (
        <h1> i am in feature2 page </h1>
    );

}


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
                    <li><Link to = "/feature1">feature1</Link></li>
                    <li><Link to = "/feature2">feature2</Link></li>
                </ul>
                <Routes>
                    <Route path = "/" element = { <Home /> } />
                    <Route path = "/add" element = { <Add /> } />
                    <Route path = "/display" element = { <Display /> }></Route>
                    <Route path = "/delete" element = { <Delete /> }></Route>
                    <Route path = "/update" element = { <Update /> }></Route>
                    <Route path = "feature1" element = { <Feature1 /> }></Route>
                    <Route path = "feature2" element = { <Feature2 /> }></Route>
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