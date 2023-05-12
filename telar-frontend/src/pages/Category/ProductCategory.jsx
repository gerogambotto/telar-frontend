import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout'
import './styles.scss'
import axios from 'axios'
import RenderProducts from '../../components/RenderProducts/RenderProducts'
import { Col, Container, Row } from 'react-bootstrap'
import Filters from './Filters'
const ProductsCategory = () => {
  const { category } = useParams()
  const [products, setProducts] = useState()
  const [filteredProducts, setFilteredProducts] = useState(null)
  const [filters, setFilters] = useState({
    maxPrice: 0
  })

  const getProducts = async () => {
    const res = await axios(
      `https://dummyjson.com/products/category/${category}`
    )
    setProducts(res.data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    filterProducts(products)
  }, [filters])

  const filterProducts = (products) => {
    setFilteredProducts(
      products?.filter((product) => {
        return product.price <= filters.maxPrice
      })
    )
  }

  return (
    <Layout>
      <Container className='container-category'>
        <Row>
          <Col>Categories go here</Col>
          <Col className='d-flex justify-content-end'>Order by</Col>
        </Row>
        <Row className='row m-auto'>
          <Col lg={4}>
            <Filters changeFilters={setFilters} />
          </Col>
          <Col
            lg={8}
            style={{
              maxWidth: 1200,
              marginTop: 64
            }}
          >
            <div className='d-flex flex-wrap '>
              {filteredProducts
                ? filteredProducts.map((product) => <RenderProducts key={product.id} product={product} />)
                : products?.map((product) => <RenderProducts key={product.id} product={product} />)}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductsCategory
