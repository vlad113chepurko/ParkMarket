import "../styles/Home.css";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <div className="main-wrapper ">
      <Filter />
      <div className="home">
        <div className="home-container">
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  );
}
