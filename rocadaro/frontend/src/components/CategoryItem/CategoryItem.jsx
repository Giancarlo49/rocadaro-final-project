import LikeButton from "../LikeButton";
import FavoriteStore from "../../store/FavoritesContext";
import Store from "../../store/Context";

export const CategoryItem = ({ item }) => {
  const { addCart } = Store();
  const { addToFavorites, removeFromFavorites } = FavoriteStore();
  
  

  return (
    <div className="product-card hover-effect">
      <img className="product-image" src={item.image} alt="Producto" />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <h5 className="product-description">{item.description}</h5>
        <p className="product-price">{item.price}</p>
        <div className="product-actions">
          <button className="add-to-cart-button" onClick={() => addCart(item.id)}>
            Add to cart
          </button>

          <button className="buy-now-button">
            <LikeButton item={item} addToFavorites={() => addToFavorites(item)} removeFromFavorites={() => removeFromFavorites(item)} />
          </button>
        </div>
      </div>
    </div>
  );
};

