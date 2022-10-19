import { deleteCookie } from "cookies-next";
import Router from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { changePassword, IChangePassword } from "../api";

export const useChangePassword = () => {
  const { mutate, isLoading } = useMutation(
    (data: IChangePassword) => changePassword(data),
    {
      onSuccess: () => {
        toast.success("Password changed successfully");
        deleteCookie("token");
        Router.reload();
      },
    }
  );

  const handleChange = (data: IChangePassword) => mutate(data);

  return { handleChange, isLoading };
};
