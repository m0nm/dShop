import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// --------------------------------

export const CategoryAccordionRoot = styled(AccordionPrimitive.Root, {
  width: "100%",
  border: 6,
});

// --------------------------------

export const CategoryAccordionItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
});

// --------------------------------

export const CategoryAccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

// --------------------------------

export const CategoryAccordionTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  width: "95%",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 5px",
  height: 25,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 14,
  lineHeight: 1,
  cursor: "pointer",
  marginBottom: "1rem",

  "&:hover": { color: "$primary" },

  '&[data-state="open"]': {
    "& svg": {
      transform: "rotate(180deg)",
    },
  },
});

// --------------------------------

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const CategoryAccordionContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 14,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  paddingBottom: "2rem",
  marginLeft: "2rem",

  "& label": { cursor: "pointer" },

  "&:hover": { color: "$primary" },

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms`,
  },
});
//  ---------------------------------------------

export const CategoryToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  backgroundColor: "transparent",
});

export const CategoryToggleGroupItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "transparent",
  color: "#111",
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  padding: "5px 0",
  cursor: "pointer",
  "& svg": { display: "none", fill: "$primary" },

  "&:hover": { color: "$primary" },

  "&[data-state=on]": {
    "& svg": { display: "inline-block", marginRight: 6 },
  },
});
