import "./styles.scss";
import React from "react";

export const ProductCard = ({ product }) => {

  return (
    <div className='col-md-4 mb-5'>
      <div className="product-card">
        <a href={`/products/${product.id}`}>
          <img
            className="image"
            src={product.thumbnail}
            alt={product.title}
          />
          <p className="title-product">{product.title}</p>
          <p className="price-product align-self-end">US${product.price}</p>
        </a>
      </div>
    </div>
  );
};
