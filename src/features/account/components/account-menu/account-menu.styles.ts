import { styled } from "@/stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const DropdownRoot = styled(DropdownMenuPrimitive.Root);
export const DropdownPortal = styled(DropdownMenuPrimitive.Portal);

export const DropdownContent = styled(DropdownMenuPrimitive.Content, {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px 5px",
  paddingBottom: "1rem",
  borderRadius: 6,
  border: "1px solid rgba(0,0,0,0.18)",

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${fadeIn} 150ms ease-out`,
  },
});

export const DropdownTrigger = styled(DropdownMenuPrimitive.Trigger, {
  all: "unset",
  maxWidth: 65, 
  "@lg": {maxWidth: "unset"}
});

export const DropdownArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white",
});

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  color: "#444",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 14,
  padding: "7px 1rem",
  position: "relative",
  userSelect: "none",
  cursor: "pointer",

  "&[data-highlighted]": {
    backgroundColor: "$primary",
    color: "white",
  },
});
