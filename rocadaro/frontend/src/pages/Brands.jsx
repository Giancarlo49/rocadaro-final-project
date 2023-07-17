import "./Brands.css";
import ContainerBrands from "../components/brands/ContainerBrands";
import Werbung from "../components/werbung/Werbung";



const Brands = () => {
  return (
    <section className="page-brands" id="brands">
      <h1>Brands</h1>
      <Werbung />
      <div className="brands-container">
        <ContainerBrands />
      </div>
    </section>
  );
};

export default Brands;
