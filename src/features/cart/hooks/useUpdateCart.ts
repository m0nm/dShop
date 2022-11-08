import { useMutation, useQueryClient } from "react-query";
import { IUpdateItem, updateCart } from "..";
import { useCartTotalStore } from "../store/cart-total-store";
import { useUpdateCartStore } from "../store/update-cart-store";

export const useUpdateCart = () => {
  const { setUpdate } = useUpdateCartStore();
  const { setCoupon } = useCartTotalStore();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (items: IUpdateItem[]) => updateCart(items),
    {
      onSuccess: () => {
        setUpdate(false);
        queryClient.invalidateQueries(["cart"]);

        // so user can re use coupon code if cart is updated
        setCoupon({ code: "", value: 0, type: "fixed" });
      },
    }
  );

  const handleUpdateCart = (items: IUpdateItem[]) => mutate(items);

  return { handleUpdateCart, isLoading };
};
