import React from "react";
import "../styles/components/OrderForm.css";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm({ setIsOrder }) {
  const [paymentType, setPaymentType] = useState("Cash");
  const navigate = useNavigate();
  const { clearSelectedProducts } = useSelectedProductsStore();
  const [formData, setFormData] = useState({
    name: "",
    phone: "+38",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    clearSelectedProducts();
    navigate("/thankpage");
  };

  return (
    <div className="zoom-overlay">
      <div className="order-form-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <img
            className="close-button-order"
            onClick={() => setIsOrder(false)}
            src="https://img.icons8.com/?size=100&id=71200&format=png&color=ec9a9a"
            alt="close"
          />
          <h3>Placing an order</h3>
          <fieldset>
            <legend>Enter name*</legend>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="name"
              autoComplete="name"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Enter phone number*</legend>
            <input
              type="tel"
              id="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="+380 (000) 00-00-000"
              autoComplete="tel"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Enter e-mail*</legend>
            <input
              type="email"
              id="email"
              placeholder="e-mail"
              onChange={handleChange}
              value={formData.email}
              autoComplete="email"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Payment*</legend>
            <select
              onChange={(e) => setPaymentType(e.target.value)}
              name="payment"
              id="payment"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Online Card</option>
            </select>
          </fieldset>

          {paymentType === "Cash" ? (
            <div
              onClick={handleSubmit}
              className="send-order-container"
              type="submit"
            >
              <p>Send the order</p>
              <img
                src="https://img.icons8.com/?size=100&id=43442&format=png&color=FFFFFF"
                alt="send"
                width={20}
                height={20}
              />
            </div>
          ) : (
            <div className="send-order-container" type="submit">
              Go to pay
              <img
                src="https://img.icons8.com/?size=100&id=kuzF9jfzqSmJ&format=png&color=FFFFFF"
                alt="pay"
                width={20}
                height={20}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
