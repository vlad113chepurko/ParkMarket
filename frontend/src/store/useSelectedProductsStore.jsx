import { create } from "zustand";

export const useSelectedProductsStore = create((set) => ({
  selectedProducts: [],

  setSelectedProducts: (newProduct) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, newProduct],
    })),

  clearSelectedProducts: () =>
    set((state) => ({
      selectedProducts: [],
    })),

  removeSelectedProduct: (_id) =>
    set((state) => {
      console.log("Before removal:", state.selectedProducts);
      const updatedProducts = state.selectedProducts.filter(
        (product) => product._id !== _id
      );
      console.log("After removal:", updatedProducts);
      return {
        selectedProducts: updatedProducts,
      };
    }),
}));
