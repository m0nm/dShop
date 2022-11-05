import { useQuery } from "react-query";
import { getProductReviews } from "..";

export const useGetProductReviews = (id: number) => {
  const { data, isLoading } = useQuery(["product-reviews"], () =>
    getProductReviews(id)
  );

  return { data, isLoading };
};
