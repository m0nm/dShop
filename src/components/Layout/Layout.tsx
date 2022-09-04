import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileNavbar } from "./Navbar/MobileNavbar/MobileNavbar";
import { Navbar } from "./Navbar/Navbar";
import { Menubar } from "./Menubar/Menubar";
import { Topbar } from "./Topbar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Topbar />

      {isTabletOrMobile ? <MobileNavbar /> : <Navbar />}

      {!isTabletOrMobile && <Menubar />}

      <main>{children}</main>

      <Footer />
    </>
  );
};
