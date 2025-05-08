import "../styles/Home.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductsStore } from "../store/useProductsStore";
import Breadcrumbs from "../components/BreadCrumps";

export default function ProductsPage() {
  const { category } = useParams();
  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.Products[category] || []);
      });
  }, [category]);

  return (
    <div className="home">
      <h1>{category.toUpperCase()}</h1>
      <Breadcrumbs />
      <div className="products-container ">
        {products.map((p) => (
          <div className="product-container" key={p.id}>
            <img src={p.src} alt={`Image: ${p.id}`} />
            <h2>{p.title}</h2>
            <p>${p.price}</p>
            <button>Buy now!</button>
          </div>
        ))}
      </div>
    </div>
  );
}
