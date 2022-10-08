import { styled } from "@/stitches.config";

export const LoadingOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 10,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.6)",
});
