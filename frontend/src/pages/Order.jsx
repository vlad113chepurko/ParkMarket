import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import "../styles/pages/Order.css";
import { useNavigate } from "react-router";
import OrderNavigation from "../components/OrderNavigation";
export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Breadcrumbs />
      <OrderNavigation />
    </div>
  );
}
