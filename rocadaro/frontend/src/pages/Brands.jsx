import "./Brands.css";
import ContainerBrands from "../components/brands/ContainerBrands";
const Brands = () => {
  return (
    <section className="page" id="brands">
      <h1>Brands</h1>
      <div className="brands-container">
        <ContainerBrands />
      </div>
    </section>
  );
};

export default Brands;
