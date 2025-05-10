import { create } from "zustand";

export const useUserStore = create((set) => ({
  userLogin: "",
  userPassword: "",
  userEmail: "",
  repPassword: "",
  setLogin: (userLogin) => set({ userLogin }),
  setEmail: (userEmail) => set({ userEmail }),
  setPassword: (userPassword) => set({ userPassword }),
  setRepPassword: (repPassword) => set({ repPassword }),
}));
