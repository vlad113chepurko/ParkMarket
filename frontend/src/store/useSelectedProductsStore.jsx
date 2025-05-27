import { create } from "zustand";

const getInitialCart = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

export const useSelectedProductsStore = create((set) => ({
  selectedProducts: getInitialCart(),
  counter: getInitialCart().length,

  setSelectedProducts: (newProduct) =>
    set((state) => {
      const updated = [...state.selectedProducts, newProduct];
      localStorage.setItem("cart", JSON.stringify(updated));
      return {
        selectedProducts: updated,
        counter: updated.length,
      };
    }),

  clearSelectedProducts: () =>
    set(() => {
      localStorage.removeItem("cart");
      return {
        counter: 0,
        selectedProducts: [],
      };
    }),

  removeSelectedProduct: (_id) =>
    set((state) => {
      const updatedProducts = state.selectedProducts.filter(
        (product) => product._id !== _id
      );
      localStorage.setItem("cart", JSON.stringify(updatedProducts))
      return {
        selectedProducts: updatedProducts,
        counter: updatedProducts.length,
      };
    }),
}));
