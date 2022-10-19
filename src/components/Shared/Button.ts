import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",

  "&:disabled, &[disabled]": {
    backgroundColor: "#E4EAEC",
    color: "#999",
    cursor: "not-allowed",
  },

  variants: {
    variant: { danger: { color: "white", backgroundColor: "$error" } },
  },
});
