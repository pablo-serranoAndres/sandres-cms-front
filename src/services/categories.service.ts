import type { Category } from "@models";

export const getAllCategories = async (): Promise<Category[]> => {
  // const result = await api<Category[]>(ENDPOINTS.CATEGORIES);
  const categories: Category[] = [
    { id: 1, key: "a", name: "Celebraciones" },
    { id: 2, key: "b", name: "Guillermo" },
    { id: 3, key: "c", name: "Viajes" },
  ];
  return categories;
};
