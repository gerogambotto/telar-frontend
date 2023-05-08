import { useState } from "react";
import "./styles.scss";

function Categories({ categories }) {


  const technology = categories?.filter(
    (category) => category === "smartphones" || category === "laptops"
  );

  const clothes = categories?.filter(
    (category) =>
      category === "womens-dresses" ||
      category === "womens-shoes" ||
      category === "mens-shirts" ||
      category === "mens-shoes" ||
      category === "mens-watches" ||
      category === "womens-watches" ||
      category === "womens-bags"  
  );
  
  const healthCare = categories?.filter(
    (category) => category === "fragrances" || category === "skincare"
  );


  const [showTechnology, setShowTechnology] = useState(false);
  const [showClothing, setShowClothing] = useState(false);
  const [showPersonalCare, setShowPersonalCare] = useState(false);

  

  return (
    <nav className="container d-flex flex-row  justify-content-center align-items-center inline ">
      <ul className="container d-flex flex-row  justify-content-center align-items-center inline">
        <li
          className="m-2"
          onMouseEnter={() => setShowTechnology(true)}
          onMouseLeave={() => setShowTechnology(false)}
        >
          Technology |
          {showTechnology && (
            <div className=" ">
              {technology?.map((e, i) => {
                return (
                  <ul className="" key={i}>
                    <li>{e}</li>
                  </ul>
                );
              })}
            </div>
          )}
        </li>
        <li
          className="m-2"
          onMouseEnter={() => setShowClothing(true)}
          onMouseLeave={() => setShowClothing(false)}
        >
          Clothes |
          {showClothing && (
            <div className="">
              {clothes?.map((e, i) => {
                return (
                  <ul key={i}>
                    <li>{e}</li>
                  </ul>
                );
              })}
            </div>
          )}
        </li>
        <li
          className="m-2"
          onMouseEnter={() => setShowPersonalCare(true)}
          onMouseLeave={() => setShowPersonalCare(false)}
        >
          HealthCare |
          {showPersonalCare && (
            <div className="">
              {healthCare?.map((e, i) => {
                return (
                  <ul key={i}>
                    <li>{e}</li>
                  </ul>
                );
              })}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
} /* 
  return (
    <div className="container">
      <a href=""> Technology</a>
      <a href=""> Clothes</a>
      <a href=""> HealthCare</a>
    </div>
  )
} */

export default Categories;
