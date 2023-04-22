import React from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { ProductCard } from "../../components/ProductCard/Productcard.jsx";
import { products } from "../../products.json";
import "./styles.scss";

export function Home() {
  const handleNextPage = () => {};

  return (
    <>
      <Layout>
        <section className="home-section">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
          <button className="nextpagebutton">Next Page </button>
          <br />
          <br />
        </section>
      </Layout>
    </>
  );
}
