import data from '../../data.js';
import './ProductCard.css';

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
                <button className="add-to-cart-button">Agregar al carrito</button>
                <button className="buy-now-button">Comprar ahora</button>
              </div>
            </div>
          </div>
          ))}
        </>
    );
  };
  
  export default ProductCard;