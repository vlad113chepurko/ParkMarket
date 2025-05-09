  import { create } from 'zustand';
  import Park_1 from "../assets/Park-1.jpg";
  import Park_2 from "../assets/Park-2.jpg";
  import Park_3 from "../assets/Park-3.jpg";
  import Park_4 from "../assets/Park-4.jpg";

  export const useParkPhotoStore = create((set) => ({
    photos: [
      {
        src: Park_1,
        title: "Serenity Walk",
        description: "A peaceful walking path surrounded by tall trees and fresh air."
      },
      {
        src: Park_2,
        title: "Lakeside View",
        description: "A calm lake reflecting the sunset, perfect for relaxing moments."
      },
      {
        src: Park_3,
        title: "Family Playground",
        description: "A modern playground where kids enjoy swings and slides all day long."
      },
      {
        src: Park_4,
        title: "Botanical Garden",
        description: "Vibrant flowers and rare plants gathered in one colorful garden."
      }
    ],
    setPhotos: (photos) => set({photos})
  }));
