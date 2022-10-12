import { styled } from "@/stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const AuthTabsContainer = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "4rem",
  width: "100%",
  "@lg": { width: "50%" },
});

export const TabsList = styled(TabsPrimitive.List, {
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  margin: "0 auto",

  "& span": {
    color: "#999",
    fontWeight: 300,
    fontSize: 13,
    margin: "0 10px",
  },
});

export const TabTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  color: "#999",
  fontSize: 20,
  fontWeight: 700,
  transition: "all 250ms",
  userSelect: "none",
  cursor: "pointer",

  "&:hover": { color: "$primary" },

  '&[data-state="active"]': {
    color: "$primary",
    fontSize: 38,
  },
});

export const TabContent = styled(TabsPrimitive.Content, {
  width: "100%",
  height: "100%",
  padding: 20,
  outline: "none",
});
