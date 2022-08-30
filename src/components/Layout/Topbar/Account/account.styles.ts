import { styled } from "@/stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const DropdownContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 115,
  backgroundColor: "white",
  borderRadius: 6,
  padding: "0",
  //   boxShadow: "0 0 7px 0 rgba(0,0,0,0.18)",
  border: "1px solid rgba(0,0,0,0.18)",

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${fadeIn} 150ms ease-out`,
  },
});

export const DropdownTrigger = styled(DropdownMenuPrimitive.Trigger, {
  all: "unset",
});

export const DropdownArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white",
});

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  color: "#444",
  lineHeight: 1,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 10,
  padding: "7px 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",
  cursor: "pointer",

  "&[data-highlighted]": {
    backgroundColor: "$primary",
    color: "white",
  },
});
