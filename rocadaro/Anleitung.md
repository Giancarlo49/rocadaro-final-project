# MERN eCOMMERCE

An eCommerce platform built with the MERN stack & Redux.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Product search feature
- User profile with orders
- Admin previledges
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Steps:

### Frontend initial setup

1. Remove the .gitignore file from the frontend folder

```bash
  cd frontend
  rm -rf .git
```

2. Transfer the .gitignore file to the root of the project
3. Add .env to the .gitignore file
4. Install react-bootstrap, bootstrap and react-icons in the frontend folder

```bash
  npm i react-bootstrap bootstrap react-icons
```

5. import bootstrap.min.css in the main.js file in the frontend folder

```bash
  import 'bootstrap/dist/css/bootstrap.min.css'
```

6. Create a folder called components in the frontend folder
7. Create a Header.js file in the components folder
8. Create a Navbar component in the Header.js file

```jsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Mern-eShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
```

9. Import the Header component in the App.js file in the frontend folder

```jsx
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Mern-eShop</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
```

---

Looks like this:

![HomePage with Header](frontend/public/screenshots/screen1.png)

---

10. Create a footer component in the components folder

```jsx
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Mern-eShop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
```

11. Import the Footer component in the App.js file in the frontend folder

```jsx
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/*  the main tag and its code*/}
      <Footer />
    </>
  );
}

export default App;
```

---

Looks like this:

![HomePage with Footer included](frontend/public/screenshots/screen2.png)

---

12. Add the following css to the index.css file in the frontend folder

```css
main {
  min-height: 80vh;
}

.rating span {
  margin: 0.1rem;
}

.rating svg {
  color: #f8e825;
}

.rating-text {
  font-size: 0.8rem;
  font-weight: 600;
  padding-left: 0.5rem;
}

.product-title {
  height: 2.5em; /* Set a fixed height */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Add ellipsis for long text */
  white-space: nowrap; /* Prevent wrapping */
}

table td,
table th {
  text-align: center;
}

.review {
  margin-top: 30px;
}

.review h2 {
  font-size: 24px;
  background: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
}

.review button {
  margin-top: 10px;
}

.carousel-caption {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
```

#### Dummy Data

13. Create a folder called images in the frontend folder containing dummy images for the project

14. Create a products.js file in the src folder in the frontend folder with the following code

```js
const products = [
  {
    _id: "1",
    name: "Product 1",
    image: "/images/airpods.jpg",
    description: "This is the description for Product 1.",
    brand: "Brand 1",
    category: "Category 1",
    price: 19.99,
    countInStock: 10,
    ratings: 4.5,
    numReviews: 8,
  },
  {
    _id: "2",
    name: "Product 2",
    image: "/images/alexa.jpg",
    description: "This is the description for Product 2.",
    brand: "Brand 2",
    category: "Category 2",
    price: 29.99,
    countInStock: 5,
    ratings: 3.8,
    numReviews: 12,
  },
  {
    _id: "3",
    name: "Product 3",
    image: "/images/camera.jpg",
    description: "This is the description for Product 3.",
    brand: "Brand 1",
    category: "Category 3",
    price: 14.99,
    countInStock: 2,
    ratings: 4.2,
    numReviews: 5,
  },
  {
    _id: "4",
    name: "Product 4",
    image: "/images/iphone.jpg",
    description: "This is the description for Product 4.",
    brand: "Brand 3",
    category: "Category 2",
    price: 39.99,
    countInStock: 0,
    ratings: 4.9,
    numReviews: 20,
  },
  {
    _id: "5",
    name: "Product 5",
    image: "/images/mouse.jpg",
    description: "This is the description for Product 5.",
    brand: "Brand 2",
    category: "Category 1",
    price: 24.99,
    countInStock: 8,
    ratings: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Product 6",
    image: "/images/playstation.jpg",
    description: "This is the description for Product 6.",
    brand: "Brand 3",
    category: "Category 3",
    price: 49.99,
    countInStock: 15,
    ratings: 4.7,
    numReviews: 18,
  },
];

export default products;
```

15. Create a HomePage.jsx file in a pages folder in the frontend folder with the following code

```jsx
import { Row, Col } from "react-bootstrap";
import products from "../products";

const Homepage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
```

16. Import the HomePage component in the App.js file in the frontend folder

```jsx
// the rest of the imports
import Homepage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homepage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

17. Create a ProductCard.jsx file in the components folder with the following code

```jsx
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
```

18. Import the ProductCard component in the HomePage.jsx file in the pages folder

```jsx
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../products";

const Homepage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
```

---

Looks like this:

![HomePage with Footer included](frontend/public/screenshots/screen2.png)

---

#### React Router

19. Install react-router-dom in the frontend folder

```bash
npm i react-router-dom

# this installs react router version 6.11 at the time of writing

```

20. We will settup our routing in main.js as follows;

```jsx
//import React from "react";
//import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
// the rest of the imports

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homepage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

The above settup does the following:

1. creates a `BrowserRouter`
2. creates a `Route` with `path="/"` and `element=<App />`
3. creates a Route with `index={true}` and `element={<Homepage />}`
   in other words, the above settup is equivalent to the following:

```jsx
<BrowserRouter>
  <Route path="/" element={<App />}>
    <Route index={true} element={<Homepage />} />
  </Route>
</BrowserRouter>
```

1.  We will then import the `Outlet` component from `react-router-dom` in the `App.js` file and use it as follows:

```jsx
// the rest of the imports
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

22. We will replace all the anchor tags (`a`) with `Link` components from `react-router-dom` in the `ProductCard.jsx` file as follows:
    - import the `Link` component from `react-router-dom`
    - replace all the anchor tags (`a`) with `Link` components
    - replace the `href` attribute with `to` attribute

```jsx
// the rest of the imports
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        // the rest of the code
      </Card.Body>
```

23. Install react router bootstrap to use bootstrap components with react router

```bash
npm i react-router-bootstrap
```

24. implement the `LinkContainer` component from `react-router-bootstrap` in the `Header.jsx` file as follows:

```jsx
// the rest of the imports
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Mern-eShop" />
              Mern-eShop
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="d-flex align-items-center justify-content-center gap-1">
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link
                  href="/login"
                  className="d-flex align-items-center justify-content-center gap-1"
                >
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
```

#### Rating Component

26. We will implement the rating component in the `ProductCard.jsx` file as follows:

- create a rating component in the components folder

```jsx
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span className="warning">
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
};
export default Rating;
```

- import the rating component in the `ProductCard.jsx` file

```jsx
// the rest of the imports
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
   // the rest of the code
        <Card.Text as="div">
          <Rating
            value={product.ratings}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;

```

---

Looks like this with the rating component

![HomePage with Ratings](frontend/public/screenshots/screen3.png)

---

#### Product Page

27. We will implement the `ProductPage.jsx` file as follows:

- create a `ProductPage.jsx` file in the `pages` folder
- import and use `useParams` hook from `react-router-dom` to get the id of the product from the url
- extract the product from the products array using the id
- display the product name for now

```jsx
import { useParams } from "react-router-dom";
import products from "../products";

const ProductPage = () => {
  // get the id from the url
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === id);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};
export default ProductPage;
```

- create a route for the product page in the `main.js` file

```jsx
// the rest of the imports
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Route>
  )
);

// the rest of the code
```

28. We will implement the `ProductPage.jsx` file as follows:

```jsx
import { useParams } from "react-router-dom";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";
// import row,col,Image,Button,Card,ListGroup from react-bootstrap
import { Row, Col, Image, Button, Card, ListGroup } from "react-bootstrap";
// import Rating from "../components/Rating";
import Rating from "../components/Rating";
// import products from "../products";
import products from "../products";

const ProductPage = () => {
  // get the id from the url
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.ratings}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductPage;
```

---

Looks like this for products in stock:

![Product Page for in stock](frontend/public/screenshots/screen3instock.png)

---

---

Looks like this for products out of stock:

![Product Page for out of stock](frontend/public/screenshots/screen3outofstock.png)

---

- set up the backend and fetch the products from the backend
- the home page will fetch the products from the backend and look like this:

```jsx
import { useEffect, useState } from "react";
import axios from "axios";
// the rest of the imports

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("YOUR_BACKEND_URL/api/products");
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return <>// the rest of the code</>;
};

export default Homepage;
```

- the product page will also fetch the product from the backend and look like this:

```jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// the rest of the imports

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      // console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, [productId]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        <FaArrowLeft /> &nbsp; Go Back
      </Link>
      <Row>// the rest of the code</Row>
    </>
  );
};
export default ProductPage;
```

### Further steps

- install axios

```bash
npm i axios
```

### Redux toolkit

- install redux toolkit and react-redux

```bash
npm i @reduxjs/toolkit react-redux
```

- create a store.j file in a store folder in the src folder and add the following code

```jsx
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
  },
});

export default store;
```

- we will create a slice for the products in the store folder

```jsx
import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
```

- then we will use the slice in the homepage.jsx file

```jsx
// the rest of the imports
import { useGetProductsQuery } from "../slices/productsApiSlice";

const Homepage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Homepage;
```

// generate a set time out function that takes in a function and time parameter

```js
const timeout = (fn, time) => {
  setTimeout(() => {
    fn();
  }, time);
};
```

//TODO:

- Add cloudinary for images
- use Auth0 for authentication
- add stripe for payments
