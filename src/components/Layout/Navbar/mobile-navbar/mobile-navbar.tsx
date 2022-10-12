import React, { useState } from "react";
import { Container, Flex } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";

import { Logo } from "../Logo";
import { MobileNavbarModal } from "./mobile-navbar-modal";

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Flex
        alignCenter
        css={{ width: "100%", justifyContent: "space-between" }}
      >
        <Logo />

        <a onClick={() => setOpen(true)}>
          <Icon name="menu" />
        </a>
      </Flex>

      <MobileNavbarModal open={open} setOpen={setOpen} />
    </Container>
  );
};
