import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { Technology } from "../../components/Technology/Technology.jsx";
import { Fragances } from "../../components/Fragances/Fragances.jsx";
import { House } from "../../components/House/House.jsx";
import "./styles.scss";
import { CarouselProducts } from "../../components/CarouselProducts/CarouselProducts.jsx";

export function Home() {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const products = await fetch(`https://dummyjson.com/products/`);
    const data = await products.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Layout>
      <section className="home-section mt-5">
        <CarouselProducts product={product}/>

      </section>
    </Layout>
  );
}
