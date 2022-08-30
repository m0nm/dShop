import Router from "next/router";
import { setCookie } from "cookies-next";
import { useMutation } from "react-query";
import { INewUser, registerUser } from "../api";

export const useRegister = () => {
  const { mutate, isLoading } = useMutation(
    (newUser: INewUser) => registerUser(newUser),
    {
      onSuccess: (res) => {
        setCookie("token", res.token);
        Router.reload();
      },
    }
  );

  const handleRegister = (newUser: INewUser) => mutate(newUser);

  return { handleRegister, isLoading };
};
