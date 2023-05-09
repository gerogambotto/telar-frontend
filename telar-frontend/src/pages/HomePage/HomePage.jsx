import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { Technology } from "../../components/Technology/Technology.jsx";
import { Fragances } from "../../components/Fragances/Fragances.jsx";
import { House } from "../../components/House/House.jsx";
import "./styles.scss";
import { CarouselProducts } from "../../components/CarouselProducts/CarouselProducts.jsx";
import { array, object } from "prop-types";

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

  /*  const categoriesToFilter = [
    ["smartphones", "laptops", "tablets"],
    [ "womens-dresses",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
    ],
    ["fragrances", "skincare"],
  ];
   */
  const categoriesToFilter = {
    electronics: ["smartphones", "laptops", "tablets"],
    fashion: [
      "womens-dresses",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
    ],
    beauty: ["fragrances", "skincare"]
  };

  const filterByCategories = (arrayOfFilters) => {
    const filteredProducts = [];
    products?.products?.map((e) => {
      if (Object.values(arrayOfFilters).includes(e.category))
        filteredProducts.push(e);
    });
    return filteredProducts;
  };
  

  return (
    <Layout>
      <section className="home-section mt-5">
        {Object.keys(categoriesToFilter).forEach((e) => (
          <CarouselProducts
            key={e}
            categories={e}
            data={filterByCategories(categoriesToFilter[e])}
          />
        ))}
      </section>
    </Layout>
  );
}
/*  
  Object.keys(categoriesToFilter).forEach((e) => { 
    console.log(e, categoriesToFilter[e])
   });
*/
