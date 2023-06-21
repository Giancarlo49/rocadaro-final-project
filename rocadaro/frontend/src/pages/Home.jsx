import { useState } from "react";
import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import DarkVariantExample from "../components/carousel/Carousel";
import Products from "./Products";
import Brands from "./Brands";
import VariationsExample from "../components/footer/Footerbuttons";
import AnimationExample from "../components/footer/Endproject";

// import DarkVariantExample from "./components/carousel/images/Carousel.jsx";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Hier kannst du die Logik für die Suche implementieren
    console.log("Suchbegriff:", searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <section className="page" id="home">
        {/* SEARCHBAR */}
        <div className="searchTest">
          <h3>This is a test</h3>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Suche"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>
              Suchen
            </button>
          </div>
        </div>
        <DarkVariantExample />
        <Products />
        <Brands />
        <VariationsExample />
        <AnimationExample />
      </section>
    </>
  );
};

export default Home;
