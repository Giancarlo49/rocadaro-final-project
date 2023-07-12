import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "../components/cart/ProductCart";
import Store from "../store/Context";
import "../pages/Cart.css";
import { loadScript } from "@paypal/paypal-js";
import { PayPalButton } from "react-paypal-button-v2";

export default function ListCart() {
  const { show1, show2, toggleClose, cart } = Store();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadPayPalScript = async () => {
      const scriptUrl = "https://www.paypal.com/sdk/js?client-id=AYKhvZPHAhnFbSwltpjUFq3IDOLFCu0hIba9AbQKBvWvjqOJnr19YfpDL6mlU2EdX0Q8P_Nos9NSQNam";
  
      try {
        await loadScript({ "url": scriptUrl });
  
        window.paypal.Buttons({
          createOrder: function (data, actions) {
            
          },
          onApprove: function (data, actions) {
            
          },
          onError: function (err) {
            
          },
        }).render("#paypal-button-container");
      } catch (error) {
        console.error("Error loading PayPal script:", error);
      }
    };
  
    loadPayPalScript();
  }, []);
  

  useEffect(() => {
    let cost = cart.reduce((cost, item) => {
      return cost + item.price;
    }, 0);
    setTotal(cost);
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
          <PayPalButton/>
        </div>
      </div>
    </div>
  );
}
