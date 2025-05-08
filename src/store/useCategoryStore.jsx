import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "drinks",
  setCategory: (newCat) => set(() => ({category: newCat}))
}));
