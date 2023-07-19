import "./Searchbar.css";
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Den Benutzer zur Amazon-Suchseite in einem neuen Tab weiterleiten
    window.open(
      `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`,
      "_blank"
    );
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="webdesigntuts-workshop">
      <form onSubmit={handleSearch} target="_blank">
        <input
          type="search"
          placeholder="Was du suchen willst gibt es hier?"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="bi bi-search" id="searchButton"></i>
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
