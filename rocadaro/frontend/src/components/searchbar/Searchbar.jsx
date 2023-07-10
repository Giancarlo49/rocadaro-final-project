import "./Searchbar.css";
import React, { useState } from "react";

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
    <section className="webdesigntuts-workshop">
      <form action="" method="">
        <input
          type="search"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </section>
  );
};

export default Searchbar;

