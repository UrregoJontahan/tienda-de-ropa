import React, { useContext, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";

function ListProducts(){

    const {filterProducts} = useContext(DataContext)
    const [details, setDetails] = useState(null)

    const showDetails=(product)=>{
        setDetails(product)
    }

    const closedDetails=()=>{
        setDetails(null)
    }

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
                   
                   {details && details.id === product.id && (
                    <div className="description">
                        <button className="closed"
                            onClick={()=>closedDetails(null)}
                        >
                            x
                        </button>
                        <p className="description-text">
                            {product.description}
                        </p>
                    </div>
                   )}
                </div>
            ))}
        </div>
    )
}

export { ListProducts }
