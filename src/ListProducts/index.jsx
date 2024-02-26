import React, { useContext, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";
import { Modal } from "../Modal";

function ListProducts({ showDetails }){

    const {filterProducts} = useContext(DataContext)

    return(
        <div className="container-images">
            {filterProducts.map((product)=>(
                <div className="card"
                    key={product.id}
                >
                    <img 
                    className="images-producs"
                    src={product.image}
                    />
                    <div className="price">
                        {"Price: "+"$" + product.price}
                        <button className="details"
                            onClick={()=>showDetails(product)}
                        >
                            see details
                        </button>
                    </div>
                    <button
                    className="add-cart">
                        <p className="text">Agregar al carrito</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export { ListProducts }
