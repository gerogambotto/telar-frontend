import "./styles.scss";
import React, { useState } from "react";
import { Image } from "antd";

export const ProductCard = ({ product }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="img">
          <Image
            preview={{ visible: false }}
            src={product.thumbnail}
            onClick={() => setVisible(true)}
            alt={product.title}
            className="img"
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src={product.thumbnail} />
              <Image src={product.thumbnail} />
              <Image src={product.thumbnail} />
            </Image.PreviewGroup>
          </div>
          <p className="title-product">{product.title}</p>
          <p className="price-product align-self-end">US${product.price}</p>
          <button>
            <a style={{ color: "#fff" }} className="btn btn-primary" href={`/product/${product.id}`}>Detalle</a>
          </button>
        </div>
      </div>
    </div>
  );
};
