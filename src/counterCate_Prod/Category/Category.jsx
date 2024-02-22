import React from "react";
import "./category.css"
import { useGetProductsApi } from "../../Api";

function Category(){
    const dataCategory = useGetProductsApi()

    let category = [...new Set(dataCategory.flatMap((results) => results.category))]

    return(
        <div className="category-header">
            <select id="selectCategory" className="selected-category">
                <option value="" className="category">Categories</option>
                    {category.map((results) => (
                        <option key={results}
                            value={results}    
                        >
                            {results}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export{ Category }
