
import data from '../../data.js';
import './ProductCard.css';
// kommentare
const ProductCard = () => {

  
  return (
  
      <>
        {data.items.map((item, index) => (
          <div key={index} className="product-card">
            <img
              className="product-image"
              src={item.image}
              alt="Producto"
            />
            <div className="product-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">{item.price}</p>
              <div className="product-actions">
                <button className="add-to-cart-button">Add to cart</button>
                <button className="buy-now-button">Like</button>
              </div>
            </div>
          </div>
          ))}
        </>
    );
  };
  
  export default ProductCard;