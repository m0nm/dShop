import React, { useState, useEffect } from "react";
import { Container } from "../../Shared";
import { Icon } from "ts-react-feather-icons";
import { SelectCurrency } from "./SelectCurrency/SelectCurrency";
import { Account } from "./Account/Account";
import { Menu, MenuItem } from "./topbar.styles";
import { useAuthModalStore } from "@/features/auth";
import { getCookie, CookieValueTypes } from "cookies-next";

export const Topbar = () => {
  const { handleOpen, handleDisplay } = useAuthModalStore();

  const [token, setToken] = useState<CookieValueTypes>("");

  useEffect(() => {
    setToken(() => getCookie("token"));
  }, []);

  return (
    <div>
      <Container justify={"between"}>
        <Menu>
          <Icon size={10} color="#FF2832" name="smartphone" />
          <MenuItem>Hotline: (+123) 456 789</MenuItem>
        </Menu>

        <Menu css={{ gap: "1rem" }}>
          {/* account or auth links */}
          {token ? (
            <MenuItem>
              <Account />
            </MenuItem>
          ) : (
            <>
              <MenuItem
                onClick={() => {
                  handleOpen(true), handleDisplay("login");
                }}
              >
                Login
              </MenuItem>
              <MenuItem
                border
                onClick={() => {
                  handleOpen(true), handleDisplay("register");
                }}
              >
                Register
              </MenuItem>
            </>
          )}
          {/* currency */}
          <MenuItem>
            <SelectCurrency />
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
};
