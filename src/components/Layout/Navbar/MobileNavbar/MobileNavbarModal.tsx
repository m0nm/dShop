import React, { Dispatch, SetStateAction } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalClose, ModalOverlay } from "@/components/Shared";

import { Searchbar } from "../Searchbar/Searchbar";
import { Menubar } from "../../Menubar";
import { NavbarItems } from "../NavbarItems";
import { Icon } from "ts-react-feather-icons";
import { ContentItem, MobileNavbarContent } from "./mobileNavbar.styles";

type IProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileNavbarModal = ({ open, setOpen }: IProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <ModalOverlay />

        <MobileNavbarContent>
          <ModalClose asChild>
            <a>
              <Icon name="x" size="20" color="black" />
            </a>
          </ModalClose>

          <ContentItem css={{ marginTop: "3rem" }}>
            <Searchbar />
          </ContentItem>

          <ContentItem>
            <NavbarItems />
          </ContentItem>

          <ContentItem css={{ justifyContent: "left", marginTop: "3rem" }}>
            <Menubar />
          </ContentItem>
        </MobileNavbarContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
