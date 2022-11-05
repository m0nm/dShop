import { styled } from "@/stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const TabsRoot = styled(TabsPrimitive.Root, {
  width: "100%",
  marginTop: "5rem",
});

export const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid #e6e6e6`,
  width: "fit-content",
  marginBottom: "2rem",
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1,
  userSelect: "none",
  cursor: "pointer",
  "&:first-child": { borderTopLeftRadius: 6 },
  "&:last-child": { borderTopRightRadius: 6 },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },

  '&[data-state="active"]': {
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 10,
  backgroundColor: "white",

  "&.reviews": {
    display: "flex",
    flexDirection: "column",
    "@lg": { flexDirection: "row" },
  },
});
