import { ModalContent } from "@/components/Shared";
import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";

const slideLeft = keyframes({
  "0%": { transform: "translate(100%,0)" },
  "100%": { transform: "translate(0,0)" },
});

export const MobileNavbarContent = styled(ModalContent, {
  height: "100vh",
  top: 0,
  right: 0,
  left: "unset",
  animation: `${slideLeft} 300ms ease-in-out`,
  transform: "none",
});

export const ContentItem = styled("div", {
  display: "flex",
  justifyContent: "center",
  margin: "2rem 0",
  width: "100%",
});
