import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import "../styles/pages/Order.css";
import OrderNavigation from "../components/OrderNavigation";
export default function Order() {
  return (
    <div className="home">
      <Breadcrumbs />
      <OrderNavigation />
    </div>
  );
}
