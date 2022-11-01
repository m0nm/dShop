import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const AccordionRoot = styled(AccordionPrimitive.Root, {
  width: "100%",
});

// --------------------------------

export const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
});

// --------------------------------

export const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

// --------------------------------

export const AccordionTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  width: "95%",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 5px",
  flex: 1,
  display: "flex",
  alignItems: "center",
  fontSize: 14,
  lineHeight: 1,
  cursor: "pointer",
  marginTop: 10,

  "& label": { paddingLeft: "1rem", fontWeight: 600, width: "100%" },
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

export const AccordionContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 14,
  marginLeft: "2rem",

  "& p": { marginTop: 10 },

  '&[data-state="open"]': {
    animation: `${slideDown} 150ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 150ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
