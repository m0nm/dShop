import { useAuthModalStore } from "@/features/auth";
import React, { useEffect } from "react";

const ResetPassword = () => {
  const { handleOpen, handleDisplay } = useAuthModalStore();

  useEffect(() => {
    handleOpen(true);
    handleDisplay("reset-password");
  }, []);

  return <></>;
};

export default ResetPassword;
