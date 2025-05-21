import React from "react";
import Breadcrumbs from "../../components/BreadCrumps";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Gazebo() {
  const [gazebos, setGazebos] = useState([]);

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

  useEffect(() => {
    console.log(gazebos);
  }, [gazebos]);

  return (
    <div className="home">
      <Breadcrumbs />
      <h1>Gazebo</h1>
      {gazebos.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.capacity}</p>
            <p>{item.hasBarbecue}</p>
            <p>{item.hasHeating}</p>
            <p>{item.pricePerHour}</p>
            <img src={item.imageURL} alt={item.titles} />
          </div>
        );
      })}
    </div>
  );
}
