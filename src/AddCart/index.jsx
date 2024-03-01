import React ,{useState} from "react";
import "./cart.css"
import { TiShoppingCart } from "react-icons/ti";

function Cart({ count, onToggle ,children}){

    return(
      <div>
          <div 
            className="icon-cart"
            onClick={onToggle}
            >
            <TiShoppingCart/>
            <div className="in-cart">
                <p className="text-cart">
                    {count}
                </p>
            </div>
        </div>
        {children}
      </div>
        
    )
}

export { Cart }