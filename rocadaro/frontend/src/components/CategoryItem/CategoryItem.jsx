import LikeButton from "../LikeButton";
import FavoriteStore from "../../store/FavoritesContext";

export const CategoryItem = ({ item, addCart }) => {
  const { favorites, addToFavorites, removeFromFavorites } = FavoriteStore();
  
  

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
            <LikeButton item={item} addToFavorites={() => addToFavorites(item.id)} removeFromFavorites={() => removeFromFavorites(item.id)} />
          </button>
        </div>
      </div>
    </div>
  );
};

