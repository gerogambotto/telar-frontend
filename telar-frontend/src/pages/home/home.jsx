import React from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { products } from "../../products.json";
import "./style.scss";

export function Home() {
  return (
    <>
      <Layout>
        <section className="home-section container-fluid">
          {products.map((products) => {
            return (
              <div key={products.id} value={products.id}>
                <div className="product">
                  <img src={products.thumbnail} />
                  <div>
                    {products.title}
                    {products.description}
                  </div>
                  <hr />
                </div>
              </div>
            );
          })}
        </section>
      </Layout>
    </>
  );
}
