import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "",
  categories: [],
  setCategory: (category) => set({ category }),
  setCategories: (categories) => set({ categories }),
}));
