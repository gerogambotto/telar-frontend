import React from "react";
import "./styles.scss";


export const ProductCard = ({productData}) => {


    console.log({productData})

    return (    
      
      <div key={product.id}>
      <div className="product">
        <img src={product.thumbnail} />
        <div>
          {product.title}
          {product.description}
        </div>
        <hr />
      </div>
    </div>
    
  );
}

