import React, { useState, useContext } from "react";
import { DataContext } from "../Provider";
import "./search.css"

function InputSearch(){
    
    const {handleSearchChange} = useContext(DataContext)
    
    const onChangeHandleClick=(e)=>{
        handleSearchChange(e.target.value)
    }

    return(
        <div>
            <input type="search" 
            placeholder="Buscar..."
            className="input-search"
            onChange={onChangeHandleClick}
            />
            <button className="btn-search">
                🔍
            </button>
        </div>
    )
}

export { InputSearch }