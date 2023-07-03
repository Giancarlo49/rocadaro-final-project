import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import data from "../data";
import { useState } from "react";
import { CategoryItem } from "../components/CategoryItem/CategoryItem";
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
          <CategoryItem key={index} item={item} addCart={addCart} />
        ))}
      </section>
    </>
  );
};

export default CategoryPage;
