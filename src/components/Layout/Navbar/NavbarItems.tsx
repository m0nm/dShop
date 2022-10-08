import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Flex } from "@/components/Shared";
import { Badge, NavbarItem } from "./navbar.styles";
import cart from "@/../public/icons/cart.svg";
import wishlist from "@/../public/icons/wishlist.svg";

export const NavbarItems = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function getCartCount() {
      const count: number =
        JSON.parse(localStorage.getItem("cart-count") as string) || 0;

      count !== cartCount && setCartCount(count);
    }

    getCartCount();

    window.addEventListener("storage", getCartCount);
    return () => {
      window.removeEventListener("storage", getCartCount)
    };
  }, [cartCount]);

  return (
    <Flex css={{ gap: 40 }}>
      <NavbarItem>
        <Image src={wishlist} width={28} height={28} alt="wishlist" />
        <div>
          <Badge variant="wishlist">0 item</Badge>
          <span>Wishlist</span>
        </div>
      </NavbarItem>

      <Link href="/cart">
        <NavbarItem>
          <Image src={cart} width={28} height={28} alt="cart" />
          <div>
            <Badge variant="cart">{cartCount} item</Badge>
            <span>Cart</span>
          </div>
        </NavbarItem>
      </Link>
    </Flex>
  );
};
