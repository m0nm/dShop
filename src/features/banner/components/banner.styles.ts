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
  userSelect: "none",

  "& img": {
    pointerEvents: "none",
  },

  "@lg": {
    height: 500,
  },
});

export const MiniBannerContainer = styled("div", {
  display: "flex",
  gap: 4,
  width: "100%",
  flexDirection: "column",
  "@lg": { flexDirection: "row" },

  "& figure": {
    position: "relative",
    height: 190,
    width: "100%",
    "@lg": { width: "50%" },
  },
});
