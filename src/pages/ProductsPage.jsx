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
      <Breadcrumbs />
      <h1>{category.toUpperCase()}</h1>
      <div className="products-container ">
        {products.map((p) => (
          <div className="product-container" key={p.id}>
            <img className="product-image" src={p.src} alt={`Image: ${p.id}`} />
            <section className="product-info-container">
              <h2>{p.title}</h2>
              <p className="description">{p.description}</p>
              <section className="buy-container">
                <p className="price">${p.price}</p>
                <img
                  title="cart"
                  className="icon"
                  src="https://img.icons8.com/?size=100&id=9671&format=png&color=d5ccab"
                  alt="cart"
                />
              </section>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
