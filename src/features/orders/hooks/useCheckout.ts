import Router from "next/router";
import { IAccount } from "@/features/account";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { placeOrder } from "../api";
import { changeCartCount, useCartTotalStore } from "@/features/cart";

export const useCheckout = () => {
  const { setCoupon } = useCartTotalStore();

  const { mutate, isLoading, isSuccess } = useMutation(
    (data: IAccount) => placeOrder(data),
    {
      mutationKey: "place-order",

      onSuccess: () => {
        toast.success("Thank you, Your order has been placed");
        changeCartCount(0);
        setCoupon({ code: "", value: 0, type: "fixed" });
        Router.push("/");
      },
    }
  );

  const handleCheckout = (data: IAccount) => mutate(data);

  return { handleCheckout, isLoading, isSuccess };
};
