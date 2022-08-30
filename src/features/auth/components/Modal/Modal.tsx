import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalClose, ModalContent, ModalOverlay } from "./modal.styles";
import { Icon } from "ts-react-feather-icons";
import { useAuthModalStore } from "../../store";
import { Login } from "../Login";
import { Register } from "../Register";
import { ForgotPassword } from "../ForgotPassword";
import { ResetPassword } from "../ResetPassword";

export const Modal = () => {
  const { open, handleOpen, display } = useAuthModalStore();

  return (
    <Dialog.Root open={open} onOpenChange={handleOpen}>
      <Dialog.Portal>
        <ModalOverlay />

        <ModalContent>
          <ModalClose asChild>
            <a>
              <Icon name="x" size="20" color="black" />
            </a>
          </ModalClose>

          {display === "login" ? (
            <Login />
          ) : display === "register" ? (
            <Register />
          ) : display === "forgot-password" ? (
            <ForgotPassword />
          ) : (
            <ResetPassword />
          )}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
