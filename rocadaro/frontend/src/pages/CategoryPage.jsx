import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import data from "../data";


const CategoryPage = () => {
  const {category} = useParams();

  const filterItems = data.items.filter((item)=>item.category === category)
  console.log(filterItems)
  return (
      <>
          
          <section className="page" id="Haushaltsware">
            <h1>{category}</h1>
            
        {filterItems.map((item, index) => (
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
        
            
            
          </section>
      </>
    
  );
};

export default CategoryPage;
