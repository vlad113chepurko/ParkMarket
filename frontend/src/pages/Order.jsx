import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import "../styles/pages/Order.css";
import { useNavigate } from "react-router";
export default function Order() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Breadcrumbs />
      <div className="order-wrapper">
        <section className="order-cart">
          <h3>Order a gazebo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            accusamus debitis similique repellendus maxime dignissimos facilis,
            accusantium voluptate exercitationem mollitia dicta eligendi
            voluptates eos neque illum iusto repudiandae inventore ad.
          </p>
          <button className="order-button" onClick={() => navigate("/gazebo")}>
            Order now!
          </button>
        </section>

        <section className="order-cart">
          <h3>Order a bike</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            assumenda expedita saepe nisi nemo repudiandae qui modi libero
            voluptatum? Deleniti ipsum magnam doloribus praesentium, illum
            similique blanditiis voluptatum facilis dicta.
          </p>
          <button
            className="order-button"
            onClick={() => navigate("/bicycles")}
          >
            Order now!
          </button>
        </section>

        <section className="order-cart">
          <h3>Order an electric scooter</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            reiciendis eveniet possimus blanditiis quae quia voluptas quaerat,
            architecto, itaque eos cum quasi maxime veritatis perferendis
            adipisci exercitationem suscipit, odit consequatur.
          </p>
          <button
            className="order-button"
            onClick={() => navigate("/bicycles")}
          >
            Order now!
          </button>
        </section>
      </div>
    </div>
  );
}
