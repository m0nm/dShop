import { useMutation, useQueryClient } from "react-query";
import { IUpdateItem, updateCart } from "..";
import { useCartTotalStore } from "../store/carttotalStore";
import { useUpdateCartStore } from "../store/updateCartStore";

export const useUpdateCart = () => {
  const { setUpdate } = useUpdateCartStore();
  const { setCouponCode } = useCartTotalStore();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (items: IUpdateItem[]) => updateCart(items),
    {
      onSuccess: () => {
        setUpdate(false);
        queryClient.invalidateQueries(["cart"]);

        // so user can re use coupon code if cart is updated
        setCouponCode("");
      },
    }
  );

  const handleUpdateCart = (items: IUpdateItem[]) => mutate(items);

  return { handleUpdateCart, isLoading };
};
