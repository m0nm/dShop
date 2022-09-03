import { axios } from "@/lib/axios";

export type IProduct = {
  id: number;
  name: string;
  slug: string;
  images: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  sale_price: number;
  stock: number;
  condition: "default" | "new" | "featured";
  created_at: string;
};

export const getProducts = async () => {
  const res = await axios.get<IProduct[]>("/api/products");
  return res.data;
};
