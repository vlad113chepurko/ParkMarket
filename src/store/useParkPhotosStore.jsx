import { create } from 'zustand';
import Park_1 from "../assets/Park-1.jpg";
import Park_2 from "../assets/Park-2.jpg";
import Park_3 from "../assets/Park-3.jpg";
import Park_4 from "../assets/Park-4.jpg";

export const useParkPhotoStore = create((set) => ({
  photos: [Park_1, Park_2, Park_3, Park_4],
  setPhotos: (photos) => set({photos})
}));
