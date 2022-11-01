import { useMutation, useQueryClient } from "react-query";
import { deleteWishlistItem } from "..";
import { changeWishlistCount } from "../utils/wishlist-count";

export const useDeleteWishlistItem = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteWishlistItem(id), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["wishlist"]);

      changeWishlistCount(res.wishlistCount);
    },
  });

  const handleDelete = () => mutate();

  return { handleDelete };
};
