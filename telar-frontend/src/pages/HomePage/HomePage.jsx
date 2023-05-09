import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { CarouselProducts } from "../../components/CarouselProducts/CarouselProducts.jsx";
import "./styles.scss";

export function HomePage() {
  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    const products = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await products.json();
    setProducts(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const categoriesToFilter = [
    {electronics: ["smartphones", "laptops", "tablets"]},
    {
      fashion: [
        "womens-dresses",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
      ]
    },
    {beauty: ["fragrances", "skincare"]}
  ]

  const filterByCategories = (arrayOfFilters) => {
    const filteredProducts = [];
    products?.products?.map((e) => {
      if (arrayOfFilters.includes(e.category))
        filteredProducts.push(e);
    });
    return filteredProducts;
  };
  

  return (
    <Layout>
      <section className="home-section mt-5">
        {categoriesToFilter.map((e) => (
          <CarouselProducts
            categories={Object.keys((e))}
            data={filterByCategories(Object.values(e)[0])}
            key={Object.keys((e))}
            
          />
        ))}
      </section>
    </Layout>
  );
}
