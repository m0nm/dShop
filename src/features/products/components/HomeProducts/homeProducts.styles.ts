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

export const ProductItem = styled("div", {
  height: 280,
  width: 233,
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "border 300ms",
  position: "relative",

  "&:hover": {
    "& .thumbnail": {
      transform: "scale(1)",
    },
    border: "1px solid $primary",
  },
});

export const ProductThumbnail = styled("div", {
  width: 231,
  height: 213,
  transform: "scale(0.93)",
  transition: "transform 500ms",
  userSelect: "none",
  pointerEvents: "none",

  "& figure": { position: "relative", width: "100%", height: "100%" },
});

export const ProductBadge = styled("div", {
  position: "absolute",
  zIndex: 10,
  top: 4,
  left: 14,
  padding: "3px 6px",
  fontSize: 12,
  fontWeight: 700,
  color: "white",

  variants: {
    variant: {
      new: {
        background: "$info",
      },

      sale: {
        background: "$error",
      },

      featured: {
        background: "$success",
      },
    },
  },
});

export const ProductInfo = styled("div", { padding: "0 10px" });

export const ProductTitle = styled("span", {
  display: "inline-block",
  fontSize: 13,
  color: "#222",
  lineHeight: "1.3em",
  height: "3em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  margin: "10px 0",

  "&:hover": { color: "$primary" },
});

export const ProductPrice = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 700,

  "& .normal-price": {
    color: "#222",
  },

  "& .sale-price": {
    color: "$error",
  },

  "& del": {
    fontSize: 14,
    fontWeight: "300",
    color: "$neutral",
    textDecoration: "line-through",
  },
});
