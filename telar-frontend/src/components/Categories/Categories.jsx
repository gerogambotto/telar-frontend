import "./styles.scss";

function Categories({ categories }) {

  return categories?.map((e, i) => {
    return <a href={`products/category/${e}`} key={i}>{e}</a>;
  });
}

export default Categories;
