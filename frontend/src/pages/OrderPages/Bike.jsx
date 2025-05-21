import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";
import { useEffect, useState } from "react";
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
    <div className="home">
      <Breadcrumbs />
      <h1>Bike</h1>
      {bikes.map((item, index) => {
        return (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.type}</p>
          <p>{item.gearCount}</p>
          <p>{item.pricePerHour}</p>
          <img src={item.imageURL} alt={item.title} />
          <p>{item.hasBasket}</p>
        </div>
        );
      })}
    </div>
  );
}
