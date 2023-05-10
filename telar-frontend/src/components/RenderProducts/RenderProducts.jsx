import "./styles.scss";
const RenderProducts = ({product}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={product.thumbnail} alt={product.title} />
        <div className="card-title">{product.title}</div>
        <div className="card-price"> $ {product.price} </div>
        <div className="discount-price"> 6 cuotas de $ {Math.round(product.price / 12)}</div>
      </div>
    </div>
  );
};

export default RenderProducts;
