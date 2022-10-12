import { useQuery } from "react-query";
import { getWishlist } from "..";

export const useGetWishlist = () => {
  const { data, isFetching } = useQuery(["wishlist"], () => getWishlist());

  return { data, isFetching };
};
