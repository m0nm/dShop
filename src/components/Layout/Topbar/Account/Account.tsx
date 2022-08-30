import React from "react";
import { useLogout } from "@/features/auth";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "./account.styles";
import { Icon } from "ts-react-feather-icons";

export const Account = () => {
  const { handleLogout } = useLogout();

  return (
    <DropdownMenu.Root>
      <DropdownTrigger>
        Account
        <span style={{ marginLeft: 3 }} />
        <Icon name="chevron-down" size="12" />
      </DropdownTrigger>

      <DropdownMenu.Portal>
        <DropdownContent sideOffset={4} align="start" alignOffset={-24}>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>

          <DropdownArrow />
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
