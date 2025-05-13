import { create } from "zustand";

export const useUserStore = create((set) => ({
  userLogin: "",
  userPassword: "",
  userEmail: "",
  repPassword: "",
  userName: localStorage.getItem("userName"),
  userDescription: localStorage.getItem("userDescription"),
  userAvatar: localStorage.getItem("userAvatar"),
  setLogin: (userLogin) => set({ userLogin }),
  setEmail: (userEmail) => set({ userEmail }),
  setPassword: (userPassword) => set({ userPassword }),
  setRepPassword: (repPassword) => set({ repPassword }),
  setUserName: (userName) => set({userName}),
  setUserDescription: (userDescription) => set({userDescription}),
  setUserAvatar: (userAvatar) => set({userAvatar})
}));
