import { Link } from "react-router-dom";
import React from "react";
import "./JardinsPage.css";
import Home from "./Home";

function Jardins(){
    return(
        <>
            <div>
                <h1>Jardins Page</h1>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default Jardins;