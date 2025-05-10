// Hooks
import { ModalContext } from "../context/ModalContext";
import { useParams } from "react-router-dom";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";
import { useProductsStore } from "../store/useProductsStore";
import { useGetProducts } from "../hooks/useGetProducts";
import { useState, useContext } from "react";

// Components
import Breadcrumbs from "../components/BreadCrumps";
import ReactDOM from "react-dom";

export default function ProductsPage() {
  // rout
  const { category } = useParams();

  // useState
  const [isOpen, setIsOpen] = useState(false);
  const [modalWindowText, setModalWindowText] = useState("");

  // Store
  const { setSelectedProducts } = useSelectedProductsStore();
  const products = useProductsStore((state) => state.products);

  const handleBuyItem = (product) => {
    setIsOpen(true);
    setModalWindowText(product.title);

    const element = {
      title: product.title,
      description: product.description,
      price: product.price,
      src: product.imageURL,
      _id: product._id,
    };

    setSelectedProducts(element);
    console.log(element);
  };

  useGetProducts();

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, modalWindowText }}>
      <div className="home">
        <Breadcrumbs />
        <ModalWindow />
        <h1>{category.toUpperCase()}</h1>
        <div className="products-container">
          {products.map((p, index) => (
            <div className="product-container" key={index}>
              <img
                className="product-image"
                src={p.imageURL}
                alt={`Image of ${p.title}`}
              />
              <section className="product-info-container">
                <h2>{p.title}</h2>
                <p className="description">{p.description}</p>
                <section className="buy-container">
                  <p className="price">{p.price} $</p>
                  <img
                    title="cart"
                    className="icon"
                    src="https://img.icons8.com/?size=100&id=9671&format=png&color=d5ccab"
                    alt="cart"
                    onClick={() => handleBuyItem(p)}
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
