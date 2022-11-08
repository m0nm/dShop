import { useMutation, useQueryClient } from "react-query";
import { changeCartCount, deleteCartItem } from "..";
import { useCartTotalStore } from "../store/cart-total-store";

export const useDeleteCartItem = (id: number) => {
  const { setCoupon } = useCartTotalStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteCartItem(id), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["cart"]);

      changeCartCount(res.cartCount);

      // so user can re use coupon code if cart item is deleted
      setCoupon({ code: "", value: 0, type: "fixed" });
    },
  });

  const handleDeleteCartItem = () => mutate();

  return { handleDeleteCartItem };
};
