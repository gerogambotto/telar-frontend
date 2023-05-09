import Carousel from "../Carousel/carousel.jsx";
import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.scss";

export const CarouselProducts = ({ categories , data }) => {
  return (
    <section className=" smartphones">
      <div className="row mr-0 mb-0 justify-content-left title">
        <h2>{categories}</h2>
        <a className="view">view</a>
      </div>

      <div
        className="mt-0"
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Carousel show={4} infiniteloop={true}>
          {data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};
