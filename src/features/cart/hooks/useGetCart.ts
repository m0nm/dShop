import { useMemo } from "react";
import { useQuery } from "react-query";
import { getCart } from "..";
import { useCartTotalStore } from "../store/cart-total-store";


export const useGetCart = () => {
  const { data, isFetching } = useQuery(["cart"], () => getCart());


  return { data, isFetching };
};
