import React from "react";
import "./header.css"
import { GiHamburgerMenu } from "react-icons/gi";

function Header(){
    return(
        <div className="counter-header">
           <div className="home">
                <GiHamburgerMenu 
                    size={40} 
                    className="icon-hamburguer"    
                />
                <img className="logo" src="src\assets\images.png"/>
           </div>
        </div>
    )
}

export{ Header }