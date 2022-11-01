import { styled } from "@/stitches.config";

export const Button = styled("button", {
  all: "unset",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  transition: "background-color 300ms",

  "&:disabled, &[disabled]": {
    backgroundColor: "#E4EAEC",
    color: "#999",
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$primary",

        "&:hover": {
          backgroundColor: "#555",
        },
      },

      danger: { color: "white", backgroundColor: "$error" },
    },
  },
});
