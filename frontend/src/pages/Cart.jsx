// components
import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import OrderForm from "../components/OrderForm";

// styles
import "../styles/pages/Home.css";
import "../styles/pages/Cart.css";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";

export default function Cart() {
  const { selectedProducts, clearSelectedProducts, removeSelectedProduct } =
    useSelectedProductsStore();
  const navigate = useNavigate();

  const [isOrder, setIsOrder] = useState(false);
  const totalPrice = selectedProducts.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="home">
      <Breadcrumbs />
      {isOrder && <OrderForm setIsOrder={setIsOrder}/>}
      <div className="home-container">
        <h1>Cart</h1>

        {selectedProducts.length === 0 ? (
          <section className="empty-container">
            <h3>Cart is empty, you can buy some</h3>
            <button onClick={() => navigate("/drinks")}>Go to shop</button>
          </section>
        ) : (
          <div>
            <div className="cart">
              <span className="delete-all-container ">
                <button className="delete-all " onClick={clearSelectedProducts}>
                  Delete all
                </button>
              </span>
              {selectedProducts.map((p) => (
                <div className="cart-container" key={p._id}>
                  <section className="cart-section">
                    <input type="checkbox"/>
                    <img
                      className="cart-image"
                      src={p.src}
                      alt={`Image: ${p._id}`}
                    />
                    <article className="cart-article">
                      <h3 className="cart-title">{p.title}</h3>
                      <p className="cart-description">{p.description}</p>
                    </article>
                  </section>
                  <section className="cart-section">
                    <p className="cart-price">{p.price} $</p>
                    <img
                      className="delete"
                      src="https://img.icons8.com/?size=100&id=67884&format=png&color=d5ccab"
                      alt="delete"
                      title="delete item"
                      onClick={() => removeSelectedProduct(p._id)}
                    />
                  </section>
                </div>
              ))}
              <span className="delete-all-container">
                <div className="but-container">
                  <p className="total">Total: {totalPrice.toFixed(2)} $</p>
                  <button onClick={() => setIsOrder(true)}>Buy</button>
                  <button onClick={() => navigate("/drinks")}>
                    Add more
                  </button>
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
