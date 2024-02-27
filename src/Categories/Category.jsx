import React, { useContext } from "react";
import "./category.css";
import { DataContext } from "../Provider";

function Category({ onSelect }) {
  const { categories } = useContext(DataContext);

 const handleCategoryClick = ( selectedCategory ) =>{
    onSelect(selectedCategory)
 }

  return (
    <div className="category-header">
      <ul>
        <h2 className="categories-section">Categories</h2>
        {categories.map((category) => (
          <li
            key={category}
            className="list-categories"
            onClick={()=>handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Category };

