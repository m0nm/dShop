import { styled } from "@/stitches.config";

export const Alert = styled("div", {
  padding: "1rem",
  display: "grid",
  placeItems: "center",
  marginBottom: "1rem",
  fontWeight: 500,
  border: "none",
  borderRadius: "0.25rem",

  variants: {
    variant: {
      error: {
        background: "$error",
        color: "#ffffff",
      },
      success: {
        background: "$success",
        color: "#ffffff",
      },
      info: {
        background: "$info",
        color: "#ffffff",
      },
      warning: {
        background: "$warning",
        color: "#ffffff",
      },
    },
  },
});
