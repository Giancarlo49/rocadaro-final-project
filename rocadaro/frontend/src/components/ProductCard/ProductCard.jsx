
import './ProductCard.css';


const ProductCard = () => {
    return (
      <div className="product-card">
        <img
          className="product-image"
          src="url_de_la_imagen"
          alt="Producto"
        />
        <div className="product-info">
          <h2 className="product-title">Nombre del Producto</h2>
          <p className="product-price">$99.99</p>
          <div className="product-actions">
            <button className="add-to-cart-button">Agregar al carrito</button>
            <button className="buy-now-button">Comprar ahora</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;