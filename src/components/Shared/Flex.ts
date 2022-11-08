import { styled } from "@/stitches.config";

export const Flex = styled("div", {
  display: "flex",

  variants: {
    alignCenter: {
      true: {
        alignItems: "center",
      },
    },

    flexCol: { true: { flexDirection: "column" } },
  },
});
