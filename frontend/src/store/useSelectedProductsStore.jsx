import { create } from "zustand";

export const useSelectedProductsStore = create((set) => ({

  selectedProducts: [],
  counter: 0,

  setSelectedProducts: (newProduct) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, newProduct],
      counter: state.counter + 1,
    })),

  clearSelectedProducts: () =>
    set(() => ({
      selectedProducts: [],
      counter: 0,
    })),

  removeSelectedProduct: (_id) =>
    set((state) => {
      const updatedProducts = state.selectedProducts.filter(
        (product) => product._id !== _id
      );
      return {
        selectedProducts: updatedProducts,
        counter: updatedProducts.length,
      };
    }),
}));
