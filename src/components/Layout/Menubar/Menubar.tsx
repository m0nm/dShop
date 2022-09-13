import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { MenubarContainer, MenubarItem, MenubarRoot } from "./menubar.styles";

type IProps = { closeModal?: () => void };

export const Menubar = ({ closeModal }: IProps) => {
  // get y position of container element
  // to change position to fixed on scroll
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const changePosition = () => {
      window.scrollY > 150 ? setFixed(true) : setFixed(false);
    };

    window.addEventListener("scroll", changePosition);
    return () => {
      window.removeEventListener("scroll", changePosition);
    };
  }, []);

  return (
    <MenubarRoot fixed={{ "@lg": fixed }}>
      <MenubarContainer as="ul">
        <Link href="/">
          <MenubarItem onClick={closeModal}>Home</MenubarItem>
        </Link>

        <Link href="/shop">
          <MenubarItem onClick={closeModal}>Shop</MenubarItem>
        </Link>

        <Link href="/">
          <MenubarItem onClick={closeModal}>Cart</MenubarItem>
        </Link>

        <Link href="/aboutus">
          <MenubarItem onClick={closeModal}>About us</MenubarItem>
        </Link>

        <Link href="/contactus">
          <MenubarItem onClick={closeModal}>Contact us</MenubarItem>
        </Link>
      </MenubarContainer>
    </MenubarRoot>
  );
};
