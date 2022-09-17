import Router from "next/router";
import React from "react";
import { useLogout } from "@/features/auth";
import { useAccountStore } from "../../store";
import {
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownRoot,
  DropdownTrigger,
} from "./accountMenu.styles";
import { Icon } from "ts-react-feather-icons";

export const AccountMenu = () => {
  const { handleLogout } = useLogout();
  const { setTabValue, tabValue } = useAccountStore();

  const handleClick = (value: typeof tabValue) => {
    setTabValue(value);
    Router.push("/account");
  };

  return (
    <DropdownRoot>
      <DropdownTrigger>
        Account
        <span style={{ marginLeft: 3 }} />
        <Icon name="chevron-down" size="12" />
      </DropdownTrigger>

      <DropdownPortal>
        <DropdownContent sideOffset={4} align="start" alignOffset={-24}>
          <DropdownItem onClick={() => handleClick("details")}>
            My Details
          </DropdownItem>

          <DropdownItem onClick={() => handleClick("orders")}>
            My Orders
          </DropdownItem>

          <DropdownItem onClick={() => handleClick("address")}>
            My Address
          </DropdownItem>

          <DropdownItem onClick={() => handleClick("settings")}>
            My Settings
          </DropdownItem>

          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>

          <DropdownArrow />
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
};
