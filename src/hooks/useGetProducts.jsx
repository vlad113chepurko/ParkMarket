import { useProductsStore } from "../store/useProductsStore";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

export const useGetProducts = () => {
  const { category } = useParams();
  const { setProducts, setIsLoaded } = useProductsStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        setProducts([]);
        setIsLoaded(false);

        const response = await axios.get(`http://localhost:3000/${category}`);
        setProducts(response.data);
        setIsLoaded(true); 
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category, setProducts, setIsLoaded]);
};
