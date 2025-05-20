import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import "../styles/pages/Order.css";
import { useNavigate } from "react-router";
import OrderNavigation from "../components/OrderNavigation";
import { Outlet } from "react-router";
export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Breadcrumbs />
      <OrderNavigation />
      <Outlet />
    </div>
  );
}
