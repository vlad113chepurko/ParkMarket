import React from "react";
import "../styles/pages/Home.css";
import { useNavigate } from "react-router-dom";
export default function ThankPage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Thank you for order!</h1>
      <button onClick={() => navigate("/")}>Go to home page</button>
    </div>
  );
}
