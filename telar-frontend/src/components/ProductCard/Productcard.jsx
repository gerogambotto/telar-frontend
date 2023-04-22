import React, { useState, useEffect } from "react";
import "./styles.scss";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <div className="image-product">
        <img classname="image" src={product.thumbnail} />
      </div>
      <div className="title-product">{product.title}</div>
      <br></br>
      <div>US${product.price}</div>
      <hr />
    </div>
  );
};
