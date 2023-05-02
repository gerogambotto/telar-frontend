import React from "react";
import "./styles.scss";

function Categories() {
  return (
    <div className="row justify-content-center categories">
      <a className="border-left-0 category">Technology</a>
      <a className="category">Fragances</a>
      <a className="category">House</a>
      <a className="category">Clothes</a>
      <a className="category">Vehicles</a>
      <a className="category">Films</a>
    </div>
  );
}

export default Categories;
