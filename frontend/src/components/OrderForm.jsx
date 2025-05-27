import React from "react";
import "../styles/components/OrderForm.css";
import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="zoom-overlay">
      <div className="order-form">
        <form onSubmit={handleSubmit}>
          <h1>Please, enter your information and our manager will call you</h1>

          <fieldset>
            <legend>Enter name*</legend>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
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
              placeholder="+380 (66)"
              autoComplete="tel"
              required
            />
          </fieldset>

          <fieldset>
            <legend>Enter email*</legend>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              autoComplete="email"
              required
            />
          </fieldset>

          <select name="payment" id="payment">
            <option value="Cash">Cash</option>
            <option value="Card">Online Card</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

function Card() {
  return (
    <>
      <fieldset>
        <legend>Enter email*</legend>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          autoComplete="email"
          required
        />
      </fieldset>
    </>
  );
}
