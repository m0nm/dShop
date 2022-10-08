import Router from "next/router";
import { MouseEventHandler } from "react";
import { deleteCookie } from "cookies-next";
import { useQuery } from "react-query";
import { logoutUser } from "../api";
import { changeCartCount } from "@/features/cart";

export const useLogout = () => {
  const { refetch } = useQuery("logout", () => logoutUser(), {
    enabled: false,
    refetchOnWindowFocus: false,
    onSuccess: () => {
      Router.reload();
      // settimout to prevent navbar flashing before page reload
      setTimeout(() => {
        deleteCookie("token");
        changeCartCount(0);
      }, 50);
    },
  });

  const handleLogout: MouseEventHandler<HTMLElement> = () => {
    refetch();
  };

  return { handleLogout };
};
