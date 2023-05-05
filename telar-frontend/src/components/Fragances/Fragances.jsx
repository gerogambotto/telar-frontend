import React from "react";
import { products } from "../../fragances.json";
import { ProductCard } from "../ProductCard/ProductCard.jsx";
import Carousel from "../Carousel/carousel.jsx";
import "./styles.scss";

export const Fragances = () => {
  return (
    <section className=" smartphones">
      <div className="row mr-0 mb-0 justify-content-left title">
        <h2>Fragances</h2>
        <a className="view">View</a>
      </div>

      <div
        className="mt-0"
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Carousel show={4} infiniteLoop={true}>
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};
