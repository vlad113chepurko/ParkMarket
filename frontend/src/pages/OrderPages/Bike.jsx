import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
export default function Bike() {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setBikes([]);
        const res = await axios.get(`http://localhost:3000/order/bike`);

        setBikes(res.data);
      } catch (err) {
        console.error(`Error with GET bikes: ${err}`);
      }
    };

    fetchBikes();
  }, []);

  useEffect(() => {
    console.log(bikes);
  }, [bikes]);

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    className="home">
      <Breadcrumbs />
      <h1>Bike</h1>
      <div className="order-items-wrapper">
        {bikes.map((item, index) => {
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
                    <strong>Bike type:</strong>
                  </p>
                  <p>{item.type}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Gear:</strong>
                  </p>
                  <p>{item.gearCount}</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Price Per Hour:</strong>
                  </p>
                  <p>{item.pricePerHour} $</p>
                </section>
                <section className="order-section">
                  <p>
                    <strong>Basket:</strong>
                  </p>
                  <p>{item.hasBasket ? "Yes" : "No"}</p>
                </section>
              </div>
              <button className="order-button-item">Buy</button>
            </section>
          );
        })}
      </div>
    </motion.div>
  );
}
