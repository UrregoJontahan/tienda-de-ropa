import React, { useContext, useEffect } from "react";
import "./category.css";
import { DataContext } from "../Provider";
import { Link } from "react-router-dom";

function Category({ onSelect }) {
  const { categories, activeCategorie } = useContext(DataContext);
 
 const handleCategoryClick = ( selectedCategory ) =>{
    onSelect(selectedCategory)
 }

 const isSameCategory = category => category === activeCategorie
 
  return (
    <div className="category-header">
      <ul>
        <h2 className="categories-section">Categories</h2>
        {categories.map((category) => (
          <li
            key={category}
            className={`list-categories ${isSameCategory(category) && 'active'}`}
            onClick={()=>handleCategoryClick(category)}
          >
            <Link to={category} className="no-link capitalize">{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Category };

