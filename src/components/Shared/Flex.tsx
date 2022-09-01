import { styled } from "@stitches/react";

export const Flex = styled("div", {
  display: "flex",

  variants: {
    alignCenter: {
      true: {
        alignItems: "center",
      },
    },
  },
});
