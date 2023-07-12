import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteStore from "../store/FavoritesContext";
import Store from "../store/Context";

const FavoritesPage = (props) => {
  const { addCart } = Store();
  const { item } = props;

  const { favorites, removeFromFavorites } = FavoriteStore();
  const navigate = useNavigate();

  console.log(favorites);

  return (
    <>
      <div className="page">
        <h1>My Favorites</h1>
        {favorites.length === 0 ? (
          <p>No favorites selected.</p>
        ) : (
          <ul>
            {favorites.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="Product" />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    addCart(item.id);
                    removeFromFavorites(item);
                  }}
                >
                  Add to cart
                </button>
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


