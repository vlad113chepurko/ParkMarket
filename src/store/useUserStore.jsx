import { create } from "zustand";

export const useUserStore = create((set) => ({
  login: "",
  password: "",
  email: "",
  repPassword: "",
  setLogin: (login) => set({ login }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setRepPassword: (repPassword) => set({ repPassword }),
}));
