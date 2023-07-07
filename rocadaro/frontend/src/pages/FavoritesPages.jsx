import React from "react";
import { useNavigate } from "react-router-dom";


import { useState } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  

  return (
    <>
      <div className="page">
        <h1>My Favorites</h1>
        {favorites.length === 0 ? (
          <p>No favorites selected.</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="Product" />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        )}

        <button className="btn btn-primary" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </div>
    </>
  );
};

export default FavoritesPage;
