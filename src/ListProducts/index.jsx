import React, { useContext, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";
import TruncateText from "../truncateTitle";
import { Link } from "react-router-dom";

function ListProducts({ showDetails, selectedCategory , addCart }){ 

    const {filterProducts} = useContext(DataContext)

        const filteredProducts = filterProducts.filter((product) =>
          product.category.includes(selectedCategory)
        );

        const handleProductClick = (product) => {
            showDetails(product);
        };

    return(
        <div className="container-images">
            {filteredProducts.map((product)=>(
                <Link to={`AddCart/${product.id}`} className="card"
                    key={product.id}
                >
                    <img  
                        className="images-producs"
                        src={product.image}
                        onClick={()=>handleProductClick(product)}
                    />
                    <div className="container-title">
                        <div className="title-product">
                            <div className="tooltiptext">{product.title}</div>
                            <TruncateText text={product.title}  maxLength={10}/>
                        </div>
                    </div>
                    <div className="price">
                        {"Price: "+"$" + product.price}
                    </div>
                    <button
                        className="add-cart"
                        onClick={()=>addCart(product, 1)}
                    >
                        <p className="text">Agregar al carrito</p> 
                    </button>
                </Link>
            ))}
        </div>
    )
}

export { ListProducts }
