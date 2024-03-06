import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="counter-header">
           <Link to={"/"} className="home">
                <img className="logo" src="src\assets\images.png"/>
           </Link>
        </div>
    )
}

export{ Header }