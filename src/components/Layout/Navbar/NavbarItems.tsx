import { Flex } from "@/components/Shared";
import Image from "next/image";
import React from "react";
import { Badge, NavbarItem } from "./navbar.styles";
import cart from "@/../public/icons/cart.svg";
import wishlist from "@/../public/icons/wishlist.svg";

export const NavbarItems = () => {
  return (
    <Flex css={{ gap: 40 }}>
      <NavbarItem alignCenter>
        <Image src={wishlist} width={28} height={28} alt="wishlist" />
        <div>
          <Badge variant="wishlist">0 item</Badge>
          <span>Wishlist</span>
        </div>
      </NavbarItem>

      <NavbarItem alignCenter>
        <Image src={cart} width={28} height={28} alt="cart" />
        <div>
          <Badge variant="cart">0 item</Badge>
          <span>Cart</span>
        </div>
      </NavbarItem>
    </Flex>
  );
};
