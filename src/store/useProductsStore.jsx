import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  isLoaded: false,
  setProducts: (products) => set({ products, isLoaded: true }),
  setIsLoaded: (isLoaded) => set({ isLoaded }), 
}));
