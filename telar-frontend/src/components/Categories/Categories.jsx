import React from "react";
import "./styles.scss";

function Categories() {
  return (
    <div className="row justify-content-center categories">
      <a className="border-left-0 category">Technology</a>
      <a className="category">Clothing</a>
      <a className="category">Home</a>
      <a className="category">Vehicles</a>
      <a className="category">Films</a>
    </div>
  );
}

export default Categories;
