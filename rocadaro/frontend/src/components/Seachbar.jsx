import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Searchbar = () => {
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
      {/* SEARCHBAR */}
      {/* <div className="searchTest"> */}
        {/* <h3>This is a test</h3> */}
        {/* <div className="search-bar-container"> */}
          <div className="searchbar">
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
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Searchbar;
