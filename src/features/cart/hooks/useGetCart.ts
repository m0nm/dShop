import { useQuery } from "react-query";
import { getCart } from "..";

export const useGetCart = () => {
  const { data, isFetching } = useQuery(["cart"], () => getCart());

  return { data, isFetching };
};
