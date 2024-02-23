import React from "react";
import "./search.css"

function InputSearch(){
    return(
        <div>
            <input type="search" 
            placeholder="Buscar..."
            className="input-search"
            />
            <button className="btn-search">
                🔍
            </button>
        </div>
    )
}

export { InputSearch }