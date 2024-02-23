import React, { useContext } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";

function ListProducts(){

    const {products} = useContext(DataContext)

    return(
        <div className="container-images">
            {products.map((product)=>(
                <div className="card"
                    key={product.id}
                >
                    <img 
                    className="images-producs"
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
