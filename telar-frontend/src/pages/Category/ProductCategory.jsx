import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./styles.scss";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CListGroup } from "@coreui/react";
import RenderProducts from "../../components/RenderProducts/RenderProducts";
const ProductsCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const res = await axios(
      `https://dummyjson.com/products/category/${category}`
    );
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout>
      <Container className="container-category ">
        <Row>
          <Col>Gero-compras / laptops</Col>
          <Col className="d-flex justify-content-end">Ordenar por</Col>
        </Row>
        <Row className="row m-auto">
          <Col lg={4}>
            <div className="category-title"></div>
            <div className="resultados">Resultados</div>
            <div className="resultados">Filtrar por</div>
          
          </Col>
          <Col
            lg={8}
            style={{
              maxWidth: 1200,
              marginTop: 64,
            }}
          >
            <div className="d-flex flex-wrap ">
              {products &&
                products.map((product) => {
                  return <RenderProducts key={product.id} product={product} />;
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductsCategory;
