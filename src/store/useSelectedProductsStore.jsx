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

  removeSelectedProduct: (id) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter(
        (product) => product.id !== id
      ),
    })),
}));
