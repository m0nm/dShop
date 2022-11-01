import { axios } from "@/lib/axios";
import { IAccount } from "@/features/account";

export type IOrder = IAccount & {
  id: number;
  total_price: number;
  status: string;
  tracking_no: string;
  created_at: string;
  product_name: string;
  quantity: number;
  price: number;
};

export const getOrders = async () => {
  const res = await axios.get<IOrder[]>("/api/user/orders");

  return res.data;
};

export const getOrderDetail = async (id: number) => {
  const res = await axios.get<IOrder[]>("/api/user/orders/" + id);

  return res.data;
};
export const placeOrder = async (data: IAccount) => {
  return await axios.post<IAccount>("/api/user/orders", data);
};
