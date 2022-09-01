import Image from "next/image";
import React from "react";

import logo from "@/../public/logo.svg";

export const Logo = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <Image src={logo} width={90} height={90} alt="logo" />
    </div>
  );
};
