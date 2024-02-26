import React, { useContext, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";
import { Modal } from "../Modal";
import TruncateText from "./truncateTitle";

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
                    className="add-cart">
                        <p className="text">Agregar al carrito</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export { ListProducts }
