import { useQuery } from "react-query";
import { getOrderDetail } from "..";

export const useGetOrderDetail = () => {
  let id: number;

  if (typeof window !== undefined) {
    id = JSON.parse(sessionStorage.getItem("order") as string).id;
  }

  const { data } = useQuery(["order-detail"], () => getOrderDetail(id));

  return { data };
};
