import Router from "next/router";
import { setCookie } from "cookies-next";
import { useMutation } from "react-query";
import { IUser, loginUser } from "../api";

export const useLogin = (remember_me: boolean) => {
  const { mutate, isLoading } = useMutation((user: IUser) => loginUser(user), {
    onSuccess: (res) => {
      const { token } = res;

      // 12096e5 is a magic number which is 14 days in milliseconds.
      const twoWeeks = new Date(Date.now() + 12096e5);
      const expires = remember_me ? twoWeeks : undefined;

      setCookie("token", token, { expires });

      Router.reload();
    },
  });

  const handleLogin = (user: IUser) => {
    mutate(user);
  };
  return { handleLogin, isLoading };
};
