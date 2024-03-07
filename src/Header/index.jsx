import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="counter-header">
           <Link to={"/"} className="home">
                <img className="logo" src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-instagram_23-2149750724.jpg"/>
           </Link>
        </div>
    )
}

export{ Header }