import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container } from "@/components/Shared";
import { MenubarContainer, MenubarItem } from "./menubar.styles";

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
    <div>
      <MenubarContainer ref={ref} as={"ul"} fixed={fixed}>
        <Container css={{ backgroundColor: "$primary" }}>
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
        </Container>
      </MenubarContainer>
    </div>
  );
};
