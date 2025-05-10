import "../styles/Filter.css";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className="filter">
      <h2>Products</h2>
      <section className="filter-category">
        <h3>Filter Category</h3>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/souvenirs"}>Souvenirs</Link>
        <Link to={"/children"}>Children</Link>
      </section>
    </div>
  );
}
