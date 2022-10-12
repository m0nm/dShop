import { styled } from "@/stitches.config";

export const Menu = styled("ul", {
  display: "flex",
  alignItems: "center",
});

export const MenuItem = styled("li", {
  padding: "10px 0",
  fontSize: "13px",
  cursor: "pointer",
  transition: "color 50ms",

  "@lg": {
    padding: "10px 5px",
  },

  "&:hover": {
    color: "$primary",
  },

  variants: {
    border: {
      true: {
        borderLeft: "1px solid rgba(0,0,0,0.11)",
        borderRight: "1px solid rgba(0,0,0,0.11)",
        padding: "0 10px",
      },
    },
  },
});
