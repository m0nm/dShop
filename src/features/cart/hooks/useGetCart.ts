import { useQuery } from "react-query";
import { getCart } from "..";
import { getCookie } from "cookies-next";

export const useGetCart = () => {
  const token = getCookie("token");

  const { data, isFetching } = useQuery(["cart"], () =>
    getCart(token as string)
  );

  return { data, isFetching };
};
