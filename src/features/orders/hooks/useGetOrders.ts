import { useQuery } from "react-query";
import { getOrders } from "../api";

export const useGetOrders = () => {
  const { isLoading, data } = useQuery(["orders"], getOrders);

  return { isLoading, data };
};
