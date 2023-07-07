import LikeButton from "../LikeButton";
import { useState } from "react";

export const CategoryItem = ({ item, addCart }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    const product = item; // El producto actual es el que queremos agregar a los favoritos
    setFavorites([...favorites, product]);
    console.log("Product added to favorites", favorites);
  };

  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((favoriteItem) => favoriteItem.id !== item.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="product-card hover-effect">
      <img className="product-image" src={item.image} alt="Producto" />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-price">{item.price}</p>
        <div className="product-actions">
          <button className="add-to-cart-button" onClick={() => addCart(item.id)}>
            Add to cart
          </button>

          <button className="buy-now-button">
            <LikeButton item={item} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />
          </button>
        </div>
      </div>
    </div>
  );
};

