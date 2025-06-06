import React from "react";
import "../styles/components/Filter.css";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className="filter">
      <section className="filter-category">
        <h3>Filter Category</h3>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/souvenirs"}>Souvenirs</Link>
        <Link to={"/children"}>Children</Link>
      </section>
    </div>
  );
}
