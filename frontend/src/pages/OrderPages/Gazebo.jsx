// components
import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";

// hooks
import { useEffect, useState } from "react";
import { useSelectedProductsStore } from "../../store/useSelectedProductsStore";

// libs
import axios from "axios";
import { motion } from "motion/react";

export default function Gazebo() {
  const [gazebos, setGazebos] = useState([]);
  const { setSelectedProducts } = useSelectedProductsStore();

  useEffect(() => {
    const fetchGazebos = async () => {
      try {
        setGazebos([]);
        const res = await axios.get(`http://localhost:3000/order/gazebos`);
        setGazebos(res.data);
      } catch (err) {
        console.error(`Error with GET gazebos: ${err}`);
      }
    };

    fetchGazebos();
  }, []);

  const handleBuyItem = (p) => {
    const element = {
      title: p.title,
      description: p.description,
      price: p.pricePerHour,
      src: p.imageURL,
      _id: p._id,
    };
    console.debug("Selected, product: ", element);

    setSelectedProducts(element);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="home"
    >
      <Breadcrumbs />
      <h1>Gazebo</h1>
      <div className="order-items-wrapper">
        {gazebos.map((item, index) => {
          return (
            <section className="order-items-container" key={index}>
              <h2>{item.title}</h2>
              <i className="order-image-container">
                <img src={item.imageURL} alt={item.title} />
              </i>
              <article className="order-description-article">
                <p>{item.description}</p>
              </article>
              <div className="order-info-container">
                <section className="order-section">
                  <p>
                    <strong>Capacity:</strong>
                  </p>
                  <p>{item.capacity}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Has Barbecue:</strong>
                  </p>
                  <p>{item.hasBarbecue ? "Yes" : "No"}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Price Per Hour:</strong>
                  </p>
                  <p>{item.pricePerHour} $</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Has Heatings:</strong>
                  </p>
                  <p>{item.hasHeating ? "Yes" : "No"}</p>
                </section>
              </div>
              <button
                onClick={() => handleBuyItem(item)}
                className="order-button-item"
              >
                Buy
              </button>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
}
