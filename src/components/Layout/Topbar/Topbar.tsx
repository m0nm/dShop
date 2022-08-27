import { styled } from "@/stitches.config";
import React from "react";
import { Container } from "../../Shared/Container";
import { Icon } from "ts-react-feather-icons";
import { SelectCurrency } from "./SelectCurrency/SelectCurrency";

const Menu = styled("ul", {
  display: "flex",
  alignItems: "center",
});

const MenuItem = styled("li", {
  padding: "10px 5px",
  fontSize: "13px",
  cursor: "pointer",
  transition: "color 50ms",

  "&:hover": {
    color: "$primary",
  },

  variants: {
    border: {
      true: {
        borderLeft: "1px solid rgba(0,0,0,0.11)",
        borderRight: "1px solid rgba(0,0,0,0.11)",
        padding: "0 10px",
      },
    },
  },
});

export const Topbar = () => {
  return (
    <div>
      <Container justify={"between"}>
        <Menu>
          <Icon size={10} color="#FF2832" name="smartphone" />
          <MenuItem>Hotline: (+123) 456 789</MenuItem>
        </Menu>

        <Menu css={{ gap: "1rem" }}>
          <MenuItem>Login</MenuItem>
          <MenuItem border>Register</MenuItem>
          <MenuItem>
            <SelectCurrency />
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
};
