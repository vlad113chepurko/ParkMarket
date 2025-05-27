// components
import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";

// Hooks
import { useSelectedProductsStore } from "../../store/useSelectedProductsStore";
import { useEffect, useState } from "react";

// libs
import { motion } from "motion/react";
import { nanoid } from "nanoid";
import axios from "axios";

export default function Scooter() {
  const [scooters, setScooters] = useState([]);
  const { setSelectedProducts } = useSelectedProductsStore();

  useEffect(() => {
    const fetchScooters = async () => {
      try {
        setScooters([]);
        const res = await axios.get(`http://localhost:3000/order/scooters`);
        setScooters(res.data);
      } catch (err) {
        console.error(`Error with GET scooters: ${err}`);
      }
    };
    fetchScooters();
  }, []);

  useEffect(() => {
    console.log(scooters);
  }, [scooters]);

  const handleBuyItem = (p) => {
    const randomId = nanoid();
    const element = {
      title: p.title,
      description: p.description,
      price: p.pricePerHour,
      src: p.imageURL,
      _id: randomId,
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
      <h1>Scooter</h1>
      <div className="order-items-wrapper">
        {scooters.map((item, index) => {
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
                    <strong>Max speed:</strong>
                  </p>
                  <p>{item.maxSpeed}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Battery range:</strong>
                  </p>
                  <p>{item.batteryRange}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Price Per Hour:</strong>
                  </p>
                  <p>{item.pricePerHour} $</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Helmet:</strong>
                  </p>
                  <p>{item.hasHelmet ? "Yes" : "No"}</p>
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
