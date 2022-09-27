import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/logo.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <a style={{ cursor: "pointer" }}>
        <Image src={logo} width={90} height={90} alt="logo" />
      </a>
    </Link>
  );
};
