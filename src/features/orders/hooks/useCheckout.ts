import Router from "next/router";
import { IAccount } from "@/features/account";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { placeOrder } from "../api";
import { changeCartCount } from "@/features/cart";

export const useCheckout = () => {
  const { mutate, isLoading, isSuccess } = useMutation(
    (data: IAccount) => placeOrder(data),
    {
      onSuccess: () => {
        toast.success("Thank you, Your order has been placed");
        changeCartCount(0);
        Router.push("/");
      },
    }
  );

  const handleCheckout = (data: IAccount) => mutate(data);

  return { handleCheckout, isLoading, isSuccess };
};
