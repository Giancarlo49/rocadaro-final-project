import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "../components/cart/ProductCart";
import Store from "../store/Context";
import "../pages/Cart.css";

export default function ListCart() {
  const { show1, show2, toggleClose, cart } = Store();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cost = cart.reduce((cost, item) => {
      return cost + item.price;
    }, 0);
    setTotal(parseFloat(cost.toFixed(2)));
  }, [cart]);

  return (
    <div className={show1}>
      <div className={`${show2} page`}>
        <div className="cart_close">
          {/* <i onClick={toggleClose} className="bi bi-x-lg"></i> */}
        </div>
        <h2>Your cart</h2>
        {cart.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
        <div className="cart_footer">
          <h3>Total:{total}€</h3>
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
}
