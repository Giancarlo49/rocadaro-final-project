import ProductCard from "../components/ProductCard/ProductCard";
import Navbar from "../components/navbar/Navbar";

const Haushaltswaren = () => {
  return (
    <>
      <Navbar />

      <section className="page" id="Haushaltwaren">
        <h1>Haushaltswaren</h1>
        <ProductCard />
      </section>
    </>
  );
};

export default Haushaltswaren;
