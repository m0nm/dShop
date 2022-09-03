import { styled } from "@/stitches.config";

export const Container = styled("div", {
  margin: "0 auto",
  padding: "0 15px",
  display: "flex",
  alignItems: "center",

  variants: {
    justify: {
      between: { justifyContent: "space-between" },
    },

    flexCol: {
      true: { flexDirection: "column" },
    },
  },

  "@sm": {
    width: "640px",
  },

  "@md": {
    width: "768px",
  },

  "@lg": {
    width: "1024px",
  },

  "@xl": {
    width: "1200px",
  },

  "@2xl": {
    width: "90%",
  },
});
