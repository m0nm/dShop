import { axios } from "@/lib/axios";
import { IProduct } from "@/features/products";
import { AxiosResponse } from "axios";

export type ICart = {
  product: IProduct;
  quantity: number;
};

export const getCart = async (token: string) => {
  const res = await axios.get<ICart[]>("/api/user/cart", {
    headers: { authorization: "Bearer " + token },
  });

  return res.data;
};

type INewItem = { productId: number; quantity: number };

export const addToCart = async (productId: number, quantity: number) => {
  const res = await axios.post<INewItem, AxiosResponse<{ cartCount: number }>>(
    "/api/user/cart",
    {
      productId,
      quantity,
    }
  );

  return res.data;
};

export type IUpdateItem = { productId: number; quantity: number };

export const updateCart = async (items: IUpdateItem[]) => {
  return await axios.put("/api/user/cart", { items });
};

export const deleteCartItem = async (id: number) => {
  return await axios
    .delete<any, AxiosResponse<{ cartCount: number }>>("/api/user/cart/" + id)
    .then((res) => res.data);
};

// coupon
type ICoupon = {
  code: string;
  value: number;
  type: "percent" | "fixed";
};

export const checkCoupon = async (code: string) => {
  return await axios.post<{ code: string }, AxiosResponse<ICoupon>>(
    "api/coupons",
    { code }
  );
};
