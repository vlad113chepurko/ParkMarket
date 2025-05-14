import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  // User profile
  userName: "",
  userDescription: "",
  userAvatar: "",
  completed: 0,

  setCompleted: (value) => set(() => ({ completed: value })),

  setUser: (user) =>
    set({
      userName: user.name,
      userDescription: user.description,
      userAvatar: user.avatar,
    }),

  setUserName: (userName) => set({ userName }),
  setUserDescription: (userDescription) => set({ userDescription }),
  setUserAvatar: (userAvatar) => set({ userAvatar }),

  // Forma
  userLogin: "",
  userPassword: "",
  userEmail: "",
  repPassword: "",
  setLogin: (userLogin) => set({ userLogin }),
  setEmail: (userEmail) => set({ userEmail }),
  setPassword: (userPassword) => set({ userPassword }),
  setRepPassword: (repPassword) => set({ repPassword }),

  updateUserDetails: (newDetails) => {
    const currentUser = get();
    set({
      userName: newDetails.name || currentUser.userName,
      userDescription: newDetails.description || currentUser.userDescription,
      userAvatar: newDetails.avatar || currentUser.userAvatar,
    });
  },
}));
