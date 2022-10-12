import React from "react";
import { useAuthModalStore } from "../../store";
import { Modal } from "@/components/Shared";

import { Login } from "../login";
import { Register } from "../register";
import { ForgotPassword } from "../forgot-password";
import { ResetPassword } from "../reset-password";
import { Title } from "../auth.styles";

export const AuthModal = () => {
  const { open, handleOpen, display } = useAuthModalStore();

  return (
    <Modal open={open} onOpenChange={handleOpen} type="auth">
      {display === "login" ? (
        <>
          <Title>Login</Title>
          <Login />
        </>
      ) : display === "register" ? (
        <>
          <Title>Register</Title>
          <Register />
        </>
      ) : display === "forgot-password" ? (
        <ForgotPassword />
      ) : (
        <ResetPassword />
      )}
    </Modal>
  );
};
