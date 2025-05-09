// Hooks
import { ModalContext } from "../context/ModalContext";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../store/useProductsStore";
import { useEffect, useState, useContext } from "react";

// Components
import Breadcrumbs from "../components/BreadCrumps";
import ReactDOM from "react-dom";

export default function ProductsPage() {
  const { category } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [modalWindowText, setModalWindowText] = useState("");
  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.Products[category] || []);
      });
  }, [category]);

  const handleBuyItem = (title) => {
    setIsOpen(true);
    setModalWindowText(title);

    setInterval(() => {
      setIsOpen(false);
    }, [3000]);

    return;
  };

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, modalWindowText }}>
      <div className="home">
        <Breadcrumbs />
        <ModalWindow />
        <h1>{category.toUpperCase()}</h1>
        <div className="products-container">
          {products.map((p) => (
            <div className="product-container" key={p.id}>
              <img
                className="product-image"
                src={p.src}
                alt={`Image: ${p.id}`}
              />
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
                    onClick={() => handleBuyItem(p.title)}
                  />
                </section>
              </section>
            </div>
          ))}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

function ModalWindow() {
  const { isOpen, setIsOpen, modalWindowText } = useContext(ModalContext);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <p>{modalWindowText} added to cart!</p>
      <img
        className="close-button"
        onClick={() => setIsOpen(false)}
        src="https://img.icons8.com/?size=100&id=71200&format=png&color=ec9a9a"
        alt="close"
      />
    </div>,
    document.body
  );
}
