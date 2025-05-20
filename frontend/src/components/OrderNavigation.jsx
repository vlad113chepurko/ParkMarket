import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function OrderNavigation() {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetch("/order_data/order_data.json")
      .then((res) => res.json())
      .then((data) => setOrderItems(data.orderItems))
      .catch((err) => console.error("Failed to load orders:", err));
  }, []);

  return (
    <div className="order-wrapper">
      {orderItems.map((item) => (
        <section className="order-cart" key={item.path}>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
          <button
            className="order-button"
            onClick={() => navigate(`/order/${item.path}`)}
          >
            Order now!
          </button>
        </section>
      ))}
    </div>
  );
}
