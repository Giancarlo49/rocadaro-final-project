import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import data from "../data";
import LikeButton from "../components/LikeButton";
import { Row, Col } from "react-bootstrap";

import Store from "../store/Context";

const CategoryPage = () => {
  //add to cart.
  const { cart, setCart } = Store();

  // const [cart, setCart] = useState([]);

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
      <section className="page">
        <h1 className="titleCategory">{category}</h1>

        <Row>
          {filterItems.map((item, index) => (
            <Col sm={6} md={3} key={index}>
              <div key={index} className="product-card">
                <img
                  className="product-image"
                  src={item.image}
                  alt="Producto"
                />

                <div className="product-info">
                  <h1 className="product-title">{item.title}</h1>
                  <h5 className="product-description">{item.description}</h5>
                  <p className="product-price">{item.price}€</p>
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
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default CategoryPage;
