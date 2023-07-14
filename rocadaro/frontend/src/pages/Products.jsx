import Cards from "../components/cards/Cards";
import Karten from "../components/karten/Karten";

import "./Products.css";

const Products = () => {
  return (
    <section className="page-products" id="products">
      <h1>Products</h1>

      <div className="karten-section"><Karten /></div>
    </section>
  );
};

export default Products;
