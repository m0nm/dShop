import { getCookie } from "cookies-next";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IPostReview, postReview } from "..";

const token = getCookie("token");

export const usePostReview = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (data: IPostReview) => postReview(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product-reviews"]);
      },
    }
  );

  const handlePostReview = (data: IPostReview) => {
    if (!token) {
      return toast.error("Please login first");
    }

    mutate(data);
  };

  return { handlePostReview, isLoading };
};
