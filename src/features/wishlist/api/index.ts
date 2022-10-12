import { axios } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { IProduct } from "@/features/products";

export const getWishlist = async (token?: string) => {
  const res = await axios.get<IProduct[]>("/api/user/wishlist", {
    headers: { authorization: "Bearer " + token },
  });

  return res.data;
};

type INewItem = { productId: number };

export const addToWishlist = async (productId: number) => {
  const res = await axios.post<
    INewItem,
    AxiosResponse<{ wishlistCount: number }>
  >("/api/user/wishlist", { productId });

  return res.data;
};

export const deleteWishlistItem = async (id: number) => {
  return await axios
    .delete<any, AxiosResponse<{ wishlistCount: number }>>(
      "/api/user/wishlist/" + id
    )
    .then((res) => res.data);
};
