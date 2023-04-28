import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./styles.scss";
import { useParams } from "react-router";
import products from "../../products.json";

export function Product() {
  console.log(products)
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const getProduct = async () => {
    const products = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await products.json()
    setProduct(data)
    console.log(data)
   }
  useEffect( async () => {
    getProduct()
  }, [])

 
  

  
  return <Layout>
   
  </Layout>;
}
