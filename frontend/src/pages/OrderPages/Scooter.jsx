import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";
import { useEffect, useState } from "react";
import axios
 from "axios";
export default function Scooter() {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    const fetchScooters = async () => {

      try {
        setScooters([]);
        const res = axios.get(`http://localhost:3000/order/gazebos`);
        setScooters(res.data);
      } catch (err) {
        console.error(err);
      }

    }
    fetchScooters();
  }, [])

  useEffect(() => {
    console.log(scooters);
  }, [scooters])
  
  return (
    <div className="home">
      <Breadcrumbs />
      <h1>Scooter</h1>
      {scooters.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.maxSpeed}</p>
            <p>{item.batteryRange}</p>
            <p>{item.hasHelmet}</p>
            <p>{item.pricePerHour}</p>
            <img src={item.imageURL} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
