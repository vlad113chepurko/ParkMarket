import { create } from "zustand";

export const useErrorStore = create((set) => ({
  error: "",
  isError: false,
  setError: (newError) => set({ error: newError, isError: true }),
  clearError: () => set({ error: "", isError: false }), 
}));
