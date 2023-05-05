import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { ProductCard } from "../../components/ProductCard/ProductCard.jsx";
import { products } from "../../products.json";
import "./styles.scss";

export function Home() {
  return (
    <Layout>
      <section className="home-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            {products?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
