import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { MenubarContainer, MenubarItem, MenubarRoot } from "./menubar.styles";

export const Menubar = () => {
  // get y position of container element
  // to change position to fixed on scroll
  const [fixed, setFixed] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();

    const changePosition = () => {
      window.scrollY > (rect?.top as number) ? setFixed(true) : setFixed(false);
    };

    window.addEventListener("scroll", changePosition);
    return () => {
      window.removeEventListener("scroll", changePosition);
    };
  }, []);

  return (
    <MenubarRoot ref={ref} fixed={{ "@lg": fixed }}>
      <MenubarContainer as="ul">
        <MenubarItem>
          <Link href="/">Home</Link>
        </MenubarItem>

        <MenubarItem>
          <Link href="/">About us</Link>
        </MenubarItem>

        <MenubarItem>
          <Link href="/">Shop</Link>
        </MenubarItem>

        <MenubarItem>
          <Link href="/">Cart</Link>
        </MenubarItem>

        <MenubarItem>
          <Link href="/">Contact us</Link>
        </MenubarItem>
      </MenubarContainer>
    </MenubarRoot>
  );
};
