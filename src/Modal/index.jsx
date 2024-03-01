import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({ product, onClose, addCart, onQuantity}){
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10) || 1;
        setSelectedQuantity(newQuantity);
        onQuantity(product.id, newQuantity);
      };
      
    

    return createPortal(
        <div className="Modal">
            <button className="closed" onClick={onClose}>
                x
            </button>
            {product && (
              <div className="container">
                  <img src={product.image} className="image-modal" />
                    <p className="title">
                        {product.title}
                    </p>
                    <p className="price-modal">${product.price}</p>
                    <div className="quantity">
                        <label htmlFor="quantity">
                                Quantity Total:
                        </label>
                        <input
                            className="quantity-btn"
                            type="number"
                            min="1"
                            value={selectedQuantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <button className="btn-modal" 
                         onClick={()=>addCart(product,selectedQuantity)}
                    >
                        Add Cart
                    </button>

                    <p className="description-text">{product.description}</p>
              </div>
            )}
        </div>,
        document.getElementById("modal")
    )
}

export { Modal }