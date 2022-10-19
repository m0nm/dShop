import Router from "next/router";
import { useMutation } from "react-query";
import { deleteUser } from "..";
import { deleteCookie } from "cookies-next";

export const useDeleteUser = () => {
  const { mutate, isLoading } = useMutation(deleteUser, {
    onSuccess: () => {
      deleteCookie("token");
      Router.reload();
    },
  });

  const handleDelete = () => mutate();

  return { handleDelete, isLoading };
};
