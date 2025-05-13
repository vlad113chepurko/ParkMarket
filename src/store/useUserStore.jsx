import { create } from "zustand";

const userData = JSON.parse(localStorage.getItem('userData')) || {};

export const useUserStore = create((set) => ({
  userLogin: "",
  userPassword: "",
  userEmail: "",
  repPassword: "",
  userName: userData.userName|| "",
  userDescription: userData.userDescription || "",
  userAvatar: userData.userAvatar || "",
  setLogin: (userLogin) => set({ userLogin }),
  setEmail: (userEmail) => set({ userEmail }),
  setPassword: (userPassword) => set({ userPassword }),
  setRepPassword: (repPassword) => set({ repPassword }),
  setUserName: (userName) => set({ userName }),
  setUserDescription: (userDescription) => set({ userDescription }),
  setUserAvatar: (userAvatar) => set({ userAvatar }),
}));
