import { styled } from "@/stitches.config";

export const CarouselContainer = styled("div", {
  height: 250,
  width: "100%",

  "@lg": {
    height: 500,
  },
});

export const CarouselItem = styled("div", {
  height: 250,
  position: "relative",

  "@lg": {
    height: 500,
  },
});
