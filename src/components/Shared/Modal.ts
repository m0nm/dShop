import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const ModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$overlay",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

// ------------------------------------------

const slideUp = keyframes({
  "0%": { transform: "translate(-50%,100%)" },
  "100%": { transform: "translate(-50%,-50%)" },
});

export const ModalContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  padding: 25,
  animation: `${slideUp} 300ms ease-in-out`,
  "&:focus": { outline: "none" },
});

// ----------------------------

export const ModalClose = styled(DialogPrimitive.Close, {
  border: "none",
  background: "transparent",
  float: "right",
  cursor: "pointer",
});
