import React from "react";
import "./listProducts.css"
import { useGetProductsApi } from "../Api";

function ListProducts(){

    const products = useGetProductsApi()

    return(
        <div className="container-images">
            {products.map((product)=>(
                <div className="card">
                    <img 
                    className="images-producs"
                    key={product.id}
                    src={product.image}
                    />
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
