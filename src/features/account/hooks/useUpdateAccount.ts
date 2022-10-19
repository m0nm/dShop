import Router from "next/router";
import { useMutation } from "react-query";
import { IAccount, updateAccount } from "../api";
import { toast } from "react-toastify";

export const useUpdateAccount = () => {
  const { mutate, isLoading } = useMutation(
    (data: IAccount) => updateAccount(data),
    {
      onSuccess: () => {
        toast.success("Account updated");
        Router.reload();
      },
    }
  );

  const handleUpdate = (data: IAccount) => mutate(data);

  return { handleUpdate, isLoading };
};
