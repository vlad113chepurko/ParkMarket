import { create } from "zustand";

export const useUserStore = create((set) => ({
  login: "",
  password: "",
  setLogin: (login) => set({ login }),
  setPassword: (password) => set({ password }),
}));
