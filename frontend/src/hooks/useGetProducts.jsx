import { useProductsStore } from "../store/useProductsStore";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const { category } = useParams();
  const { setProducts, setIsLoaded } = useProductsStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts([]);
        setIsLoaded(false);

        const response = await axios.get(`http://localhost:3000/products/${category}`);
        setProducts(response.data);
        setIsLoaded(true);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category, setProducts, setIsLoaded]);
  return isLoading;
};
