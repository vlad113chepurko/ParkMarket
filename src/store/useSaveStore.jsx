import { create } from "zustand";
export const useSaveStore = create((set) => ({
  isSave: false,
  setIsSave: (isSave) => set({ isSave }),
}));
