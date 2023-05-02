import "./styles.scss";
import React, { useState } from "react";

export const ProductCard = ({ product }) => {

  return (
    <div className="col-md-4 mb-5">
      <div className="product-card">
      <a style={{ color: "#fff" }} className="" href={`/product/${product.id}`}>
        <div className="img">
          <img  className="img" src={product.thumbnail} alt={product.title} />
          <p className="title-product">{product.title}</p>
          <p className="price-product align-self-end">US${product.price}</p>
          <p className="cuotas">6  cuotas sin interés $ {Math.round(product.price /6)}</p>
        </div>
        </a>
      </div>
    </div>
  );
};
