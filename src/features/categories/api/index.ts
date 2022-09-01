import { axios } from "@/lib/axios";

export type ICategory = {
  id: number;
  name: string;
  subcategories?: { id: number; name: string }[];
};

export const getCategories = (): Promise<ICategory[]> =>
  axios.get("/api/categories").then((data) => data.data);
