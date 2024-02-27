import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: {},
  update: (data) => set({ product: data }),
}));
