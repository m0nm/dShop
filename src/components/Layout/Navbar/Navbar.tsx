import React from "react";
import { Container } from "@/components/Shared";

import { Searchbar } from "./Searchbar/Searchbar";
import { Logo } from "./Logo";
import { NavbarItems } from "./navbar-items";

export const Navbar = () => {
  return (
    <Container justify="between">
      {/* logo */}
      <Logo />

      {/* searchbar */}
      <div style={{ width: "50%" }}>
        <Searchbar />
      </div>

      {/* cart and wishlist */}
      <NavbarItems />
    </Container>
  );
};
