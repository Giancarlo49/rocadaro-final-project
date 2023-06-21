// import "./Home.css";

// // import DarkVariantExample from "./components/carousel/Carousel.jsx";

// const Home = () => {
//   return (
//     <>
//       <div className="page">
//         <h1>RoCaDaRo</h1>
//         <h2>**SLOGAN**</h2>

//         <div className="searchTest">
//           <h3>This is a test</h3>
//         </div>

//         {/* <DarkVariantExample /> */}
//         {/* Weitere Inhalte für Home */}
//       </div>
//     </>
//   );
// };

// export default Home;

import { useState } from "react";
import "./Home.css";
// import GroupExample from "../components/cards/Cards.jsx";
import DarkVariantExample from "../components/carousel/Carousel";
import "bootstrap-icons/font/bootstrap-icons.css";

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
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <DarkVariantExample />
      </section>
    </>
  );
};

export default Home;
