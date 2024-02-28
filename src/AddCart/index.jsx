import React from "react";
import "./cart.css"
import { TiShoppingCart } from "react-icons/ti";

function Cart({ count }){

    return(
        <div className="icon-cart">
            <TiShoppingCart />
            <div className="in-cart">
                <p className="text-cart">
                    {count}
                </p>
            </div>
        </div>
    )
}

export { Cart }