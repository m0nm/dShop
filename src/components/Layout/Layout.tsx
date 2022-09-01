import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileNavbar } from "./Navbar/MobileNavbar/MobileNavbar";
import { Navbar } from "./Navbar/Navbar";
import { Topbar } from "./Topbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <Topbar />

      {isTabletOrMobile ? <MobileNavbar /> : <Navbar />}

      {children}
    </div>
  );
};
