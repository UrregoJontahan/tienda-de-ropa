import React, { useContext } from "react";
import TruncateText from "../../truncateTitle";
import "./modalCart.css"

function ProductsAddCart({ cartItem }){
    
    return(
        <div className="flex-col">
            <ul className="products-list">
                {cartItem.map((product)=>(
                    <li className="selected-products">
                        <img className="selected-product-cart"
                             src={product.image}
                        />
                        <h2 className="name-product">
                            <TruncateText text={product.title}  maxLength={10}/>
                        </h2>
                        <p className="price-product">
                            ${product.price}
                        </p>
                        <p className="count"> quantity:</p>
                    </li>
                ))}
            </ul>
            <div className="container-total">
                <p>Total</p>
            </div>
        </div>
    )
}

export { ProductsAddCart }