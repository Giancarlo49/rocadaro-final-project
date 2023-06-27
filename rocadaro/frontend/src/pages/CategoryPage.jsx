import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import data from "../data";
import { useState } from "react";

const CategoryPage = () => {

  //add to cart.
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const product = filterItems.find((item) => item.id === id);
    if (product) {
      setCart([...cart, product]);
      console.log("Product added to cart:", product);
    }
  };

  // fiter über categorys
  const { category } = useParams();

  const filterItems = data.items.filter((item) => item.category === category);
  console.log(filterItems);

  return (
    <>
      <section className="page" id="Haushaltsware">
        <h1>{category}</h1>

        {filterItems.map((item, index) => (
          <div key={index} className="product-card">
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
