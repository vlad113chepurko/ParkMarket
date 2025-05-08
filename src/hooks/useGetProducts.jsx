import { useCategoryStore } from "../store/useCategoryStore";
import { useProductsStore } from "../store/useProductsStore";
import { useEffect } from "react";

export const useGetProducts = () => {
  const { category } = useCategoryStore((state) => state.category);
  const { setProducts }= useProductsStore((state) => state.setProducts);

  useEffect(() => {
    if (!category) return;
    fetch(`/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.Products[category] || []);
      })
      .catch((err) => console.error(err));

  }, []);
}
