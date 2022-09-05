import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { MenubarContainer, MenubarItem, MenubarRoot } from "./menubar.styles";

type IProps = { closeModal: () => void };

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
        <MenubarItem onClick={closeModal}>
          <Link href="/">Home</Link>
        </MenubarItem>

        <MenubarItem onClick={closeModal}>
          <Link href="/">Shop</Link>
        </MenubarItem>

        <MenubarItem onClick={closeModal}>
          <Link href="/">Cart</Link>
        </MenubarItem>

        <MenubarItem onClick={closeModal}>
          <Link href="/aboutus">About us</Link>
        </MenubarItem>

        <MenubarItem onClick={closeModal}>
          <Link href="/contactus">Contact us</Link>
        </MenubarItem>
      </MenubarContainer>
    </MenubarRoot>
  );
};
