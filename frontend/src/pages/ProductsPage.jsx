// components
import React from "react";
import Breadcrumbs from "../components/BreadCrumps";
import ModalWindow from "../context/ModalWindow";

// context
import { ModalContext } from "../context/ModalContext";

// hooks
import { useParams } from "react-router-dom";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";
import { useProductsStore } from "../store/useProductsStore";
import { useGetProducts } from "../hooks/useGetProducts";
import { useRef, useState } from "react";

export default function ProductsPage() {
  const { category } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [modalWindowText, setModalWindowText] = useState("");
  const timeoutRef = useRef(null);

  const { setSelectedProducts } = useSelectedProductsStore();
  const products = useProductsStore((state) => state.products);

  const handleBuyItem = (product) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

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

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  const isLoadingProducts = useGetProducts();
  if (isLoadingProducts)
    return (
      <div className="loading">
        <img
          className="spinner"
          src="https://img.icons8.com/?size=100&id=RnQwNiHnJRvf&format=gif&color=878568"
          alt="loading"
          width={50}
          height={50}
        />
      </div>
    );

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, modalWindowText }}>
      <div className="home">
        <Breadcrumbs />
        <ModalWindow />
        <h1>{category.toUpperCase()}</h1>
        <div className="products-container">
          {products.map((p, index) => (
            <div className="product-container" key={index}>
              <i className="product-image-container">
                <img
                  className="product-image"
                  src={p.imageURL}
                  alt={`Image of ${p.title}`}
                />
              </i>
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
