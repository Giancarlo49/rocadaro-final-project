import LikeButton from "../LikeButton";

export const CategoryItem = ({ item, addCart }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={item.image} alt="Producto" />
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-price">{item.price}</p>
        <div className="product-actions">
          <button
            className="add-to-cart-button"
            onClick={() => addCart(item.id)}
          >
            Add to cart
          </button>

          <button className="buy-now-button">
            <LikeButton />
          </button>
        </div>
      </div>
    </div>
  );
};
