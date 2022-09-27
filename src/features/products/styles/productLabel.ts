import { styled } from "@/stitches.config";

export const ProductLabel = styled("h1", {
  backgroundColor: "$primary",
  fontSize: 14,
  fontWeight: 700,
  color: "#fefefe",
  lineHeight: 3,
  padding: "0px 18px",
  marginTop: "3rem",

  variants: {
    variant: {
      sale: { backgroundColor: "$error" },
      new: { backgroundColor: "$info" },
      featured: { backgroundColor: "$success" },
    },
  },
});
