import React, { useContext, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";
import TruncateText from "../truncateTitle";

function ListProducts({ showDetails, selectedCategory , addCart }){ 

    const {filterProducts} = useContext(DataContext)

        const filteredProducts = filterProducts.filter((product) =>
          product.category.includes(selectedCategory)
        );

    return(
        <div className="container-images">
            {filteredProducts.map((product)=>(
                <div className="card"
                    key={product.id}
                >
                    <img 
                        className="images-producs"
                        src={product.image}
                        onClick={()=>showDetails(product)}
                    />
                    <div className="container-title">
                        <p className="title-product">
                            <TruncateText text={product.title}  maxLength={10}/>
                        </p>
                    </div>
                    <div className="price">
                        {"Price: "+"$" + product.price}
                    </div>
                    <button
                        className="add-cart"
                        onClick={()=>addCart(product)}
                    >
                        <p className="text">Agregar al carrito</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export { ListProducts }
