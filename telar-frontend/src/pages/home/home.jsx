import React from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { ProductCard } from "../../components/ProductCard/Productcard.jsx";
import { products } from "../../products.json";
import "./styles.scss";

export function Home() {
  return (
    <>
      <Layout>
        <section className="home-section container-fluid">
          
          {products.map((product) => {           
           <ProductCard
           productData={product}      
           />
           
          })}
        </section>
      </Layout>
    </>
  );
}
