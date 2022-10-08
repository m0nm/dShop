import { useMutation, useQueryClient } from "react-query";
import { changeCartCount, deleteCartItem } from "..";
import { useCartTotalStore } from "../store/carttotalStore";

export const useDeleteCartItem = (id: number) => {
  const { setCouponCode } = useCartTotalStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteCartItem(id), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["cart"]);

      changeCartCount(res.cartCount);

      // so user can re use coupon code if cart item is deleted
      setCouponCode("");
    },
  });

  const handleDeleteCartItem = () => mutate();

  return { handleDeleteCartItem };
};
