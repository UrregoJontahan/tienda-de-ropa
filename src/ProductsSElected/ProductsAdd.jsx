import React, { useContext } from "react";
import TruncateText from "../truncateTitle";
import "./productsSelected.css";

function ProductsAddCart({ cartItem, quantity }) {
  
    const calculateTotalCost = () => {
    let totalCost = 0;

    cartItem.forEach((product) => {
      const productQuantity = quantity[product.id] || 1; 
      totalCost += product.price * productQuantity;
    });

    return totalCost;
  };

  return (
    <div className="flex-col">
      <ul className="products-list">
        {cartItem.map((product) => (
          <li className="selected-products" key={product.id}>
            <img className="selected-product-cart" src={product.image} />
            <h2 className="name-product">
              <TruncateText text={product.title} maxLength={10} />
            </h2>
            <p className="price-product">${product.price}</p>
            <p className="count">Quantity: {product.quantity}</p>
          </li>
        ))}
      </ul>
      <div className="total-cost">
        <p className="total-cost">Total Cost: ${calculateTotalCost()}</p>
      </div>
    </div>
  );
}

export { ProductsAddCart };
