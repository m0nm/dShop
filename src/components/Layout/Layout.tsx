import React, { ReactNode } from "react";
import { Topbar } from "./Topbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Topbar />

      {children}
    </div>
  );
};
