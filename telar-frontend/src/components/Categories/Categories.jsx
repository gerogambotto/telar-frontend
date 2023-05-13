import { useState } from "react"
import "./styles.scss"
import { Col, Container, Row } from "react-bootstrap"
import categories from "../../../categoriesClassification.json"
import Title from "./Title"

function Categories() {

  return (
    <nav className="container d-flex flex-row  justify-content-center align-items-center inline ">
        {categories.map((e) => (
          <Title title={Object.keys(e)} key={Object.keys(e)} subcategories={Object.values(e)}/>
        ))}
    </nav>
  )
}
export default Categories
