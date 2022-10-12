import React, { Dispatch, SetStateAction } from "react";

import { Modal } from "@/components/Shared";
import { Searchbar } from "../Searchbar/Searchbar";
import { Menubar } from "../../Menubar";
import { NavbarItems } from "../navbar-items";
import { ContentItem } from "./mobile-navbar.styles";

type IProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileNavbarModal = ({ open, setOpen }: IProps) => {
  // to close modal when clicking on an item because it still persits
  const closeModal = () => setOpen(false);

  return (
    <Modal open={open} onOpenChange={setOpen} type="mobile-navbar">
      <ContentItem css={{ marginTop: "3rem" }}>
        <Searchbar />
      </ContentItem>

      <ContentItem>
        <NavbarItems />
      </ContentItem>

      <ContentItem css={{ justifyContent: "left", marginTop: "3rem" }}>
        <Menubar closeModal={closeModal} />
      </ContentItem>
    </Modal>
  );
};
