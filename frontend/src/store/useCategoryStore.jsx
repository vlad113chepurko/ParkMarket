import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "",
  setCategory: (newCat) => set(() => ({ category: newCat })),
}));
