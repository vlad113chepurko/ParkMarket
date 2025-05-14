  import { create } from 'zustand';

  export const useParkPhotoStore = create((set) => ({
    photos: [
      {
        src: "/parks/Park-1.jpg",
        title: "Serenity Walk",
        description: "A peaceful walking path surrounded by tall trees and fresh air."
      },
      {
        src: "/parks/Park-2.jpg",
        title: "Lakeside View",
        description: "A calm lake reflecting the sunset, perfect for relaxing moments."
      },
      {
        src: "/parks/Park-3.jpg",
        title: "Family Playground",
        description: "A modern playground where kids enjoy swings and slides all day long."
      },
      {
        src: "/parks/Park-4.jpg",
        title: "Botanical Garden",
        description: "Vibrant flowers and rare plants gathered in one colorful garden."
      }
    ],
    setPhotos: (photos) => set({photos})
  }));
