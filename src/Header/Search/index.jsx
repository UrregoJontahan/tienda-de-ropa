import React from "react";
import "./search.css"

function InputSearch(){
    return(
        <input type="search" 
            placeholder="Buscar..."
            className="input-search"
        />
    )
}

export { InputSearch }