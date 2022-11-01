import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileNavbar } from "./Navbar/mobile-navbar/mobile-navbar";
import { Navbar } from "./Navbar/Navbar";
import { Menubar } from "./Menubar/Menubar";
import { Topbar } from "./Topbar";
import { Footer } from "./Footer/Footer";
import { BackToTopButton } from "../Misc/back-to-top-button";

export const Layout = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Topbar />

      {isTabletOrMobile ? <MobileNavbar /> : <Navbar />}

      {!isTabletOrMobile && <Menubar />}

      <main>{children}</main>

      <Footer />

      <BackToTopButton />
    </>
  );
};
