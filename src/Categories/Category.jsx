import React, { useContext } from "react";
import "./category.css"
import { DataContext } from "../Provider";

function Category(){
    const {categories} = useContext(DataContext)

    return(
        <div className="category-header">
          <ul> 
            <h2 className="categories-section">Categories</h2>
            {categories.map((category)=>(
                <li 
                  key={category}
                  className="list-categories"
                >{category}</li>
            ))}
          </ul>
        </div>
    )
}

export{ Category }
