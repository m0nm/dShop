import { axios } from "@/lib/axios";
import { IStore } from "../store/shop-product-store";

export type IProduct = {
  id: number;
  name: string;
  slug: string;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  price: number;
  sale_price: number;
  stock: number;
  condition: "default" | "new" | "featured";
  attributes: { id: number; name: string; value: string[] }[];
  created_at: string;
};

export const getProducts = async () => {
  const res = await axios.get<IProduct[]>("/api/products");
  return res.data;
};

// -----------------------------------------------------

export type IShopProduct = {
  data: IProduct[];
  last_page: number;
  from: number;
  to: number;
  total: number;
};

export const getShopProducts = async (
  page: number,
  page_count: number,
  sort: IStore["filter_sort"],
  subcategories: IStore["filter_subcategories"],
  price_range: IStore["filter_price"],
  size: IStore["filter_size"],
  search: IStore["filter_search"],
  category: number
) => {
  const request = {
    params: {
      page,
      page_count,
      sort,
      subcategories,
      price_range,
      size,
      search,
      category,
    },
  };

  const res = await axios.get<IShopProduct>("/api/products", request);
  return res.data;
};

// -----------------------------------------------------

export type IProductDetail = {
  product: IProduct;
  relatedProducts: IProduct[];
};

export const getProductDetail = async (slug: string) => {
  const res = await axios.get<IProductDetail>("/api/products/" + slug);

  return res.data;
};

// -----------------------------------------------------
type IReview = {
  id: number;
  name: string;
  email: string;
  content: string;
  rating: number;
  date: string
};

export const getProductReviews = async (id: number) => {
  const res = await axios.get<IReview[]>(`/api/products/${id}/reviews`);

  return res.data;
};

export type IPostReview = {
  rating: number;
  content: string | undefined;
  name: string | undefined;
};

export const postReview = async (id: number, data: IPostReview) => {
  return await axios.post<IPostReview>(`/api/products/${id}/reviews`, data);
};
