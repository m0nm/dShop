import { styled } from "@/stitches.config";

export const ProductItem = styled("div", {
  position: "relative",
  cursor: "pointer",
  border: "1px solid transparent",
  paddingBottom: "10px",
  transition: "border 300ms",

  "&:hover": {
    "& .thumbnail": {
      transform: "scale(1)",
    },
    border: "1px solid $primary",
  },
});

export const ProductThumbnail = styled("div", {
  position: "relative",
  width: "100%",
  height: 240,
  transform: "scale(0.93)",
  transition: "transform 500ms",
  userSelect: "none",
  overflow: "hidden",

  "& figure": {
    position: "relative",
    width: "100%",
    height: "100%",

    "& img": { userSelect: "none", pointerEvents: "none" },
  },

  // view product button
  "&:hover .view-btn": { opacity: "1 !important", right: 0 },

  "& .view-btn": {
    position: "absolute",
    bottom: 4,
    right: "-100%",
    zIndex: 2,
    backgroundColor: "#000",
    color: "white",
    padding: "10px 12px",
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 1,
    textTransform: "uppercase",
    border: 0,
    cursor: "pointer",
    opacity: 0,
    transition: "all 600ms ease-in-out",

    "&:hover": { backgroundColor: "#111" },
  },
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

export const ProductInfo = styled("div", {
  padding: "0 10px",
});

export const ProductTitle = styled("span", {
  display: "inline-block",
  fontSize: 13,
  color: "#222",
  lineHeight: "1.3em",
  maxHeight: "3em",
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
