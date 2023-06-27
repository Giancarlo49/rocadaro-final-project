import "./Brands.css";
import ContainerBrands from "../components/brands/ContainerBrands";
import { Link } from "react-scroll";
const Brands = () => {
  const handleBrandsLinkClick = () => {
    const brandsElement = document.getElementById("brands");
    if (brandsElement) {
      brandsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="page" id="brands">
      <h1>Brands</h1>
      <div className="brands-container">
        <ContainerBrands />
      </div>
      <Link
        to="brands"
        smooth={true}
        duration={500}
        onClick={handleBrandsLinkClick}
      >
        Scroll to Brands
      </Link>
    </section>
  );
};

export default Brands;
