import { useState } from "react";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

function Categories({ categories }) {
  const [showModal, setShowModal] = useState(false);
  const categoriesToMap = [];

  return (
    <nav className="container d-flex flex-row  justify-content-center align-items-center inline ">
      <nav className="container d-flex flex-row  justify-content-center align-items-center inline">
        <a
          className="m-2 "
          href="/products/category/laptops"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          Technology |
        </a>
        <div
          className="m-2"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          Clothes |
        </div>
        <div
          className="m-2"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          HealthCare
        </div>
        {/* {showModal && (
          <Container>
            <Row>
              <Col>
                <title>Celulares</title>
                <div>Xiaomi</div>
                <div>Samsung</div>
                <div>Apple</div>
              </Col>
              <Col>
                <title>Monitores</title>
                <div>Samsung</div>
                <div>AOC</div>
                <div>Alienware</div>
              </Col>
              <Col>
                <title>Reloj</title>
                <div>Xiaomi</div>
                <div>Samsung</div>
                <div>Apple</div>
              </Col>
            </Row>
          </Container>
        )} */}
      </nav>
    </nav>
  );
}
export default Categories;
