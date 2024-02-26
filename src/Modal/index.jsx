import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({ product, onClose }){

    return createPortal(
        <div className="Modal">
            <button className="closed" onClick={onClose}>
                x
            </button>
            {product && (
              <div className="container">
                  <div className="description">
                  <img src={product.image} className="image-modal" />
                    <p className="title">
                        {product.title}
                    </p>
                    <p className="price-modal">${product.price}</p>
                    <button className="btn-modal">
                        Agregar al carrito
                    </button>
                    <p className="description-text">{product.description}</p>
                </div>
              </div>
            )}
        </div>,
        document.getElementById("modal")
    )
}

export { Modal }