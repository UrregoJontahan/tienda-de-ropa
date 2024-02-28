import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({ product, onClose, addCart }){

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
                        <label htmlFor="quantity">Quantity Total:</label>
                        <input
                            className="quantity-btn"
                            type="number"
                            min="1"
                        />
                    </div>
                    <button className="btn-modal" 
                         onClick={()=>addCart(product)}
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