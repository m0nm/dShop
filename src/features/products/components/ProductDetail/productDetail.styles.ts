import { Flex } from "@/components/Shared";
import { styled } from "@/stitches.config";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

export const ProductDetailContainer = styled(Flex, {
  width: "100%",
  gap: 10,
  flexDirection: "column",
  marginTop: "2rem",
  "@lg": { flexDirection: "row", gap: 24 },
});

// ------------------------------------

export const ImagesBox = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column-reverse",
  flexWrap: "wrap",
  width: "100%",

  "@lg": { width: "45%", flexWrap: "nowrap" },

  "& .image-thumbs": {
    width: "100%",
    marginRight: 0,
    marginTop: 14,

    "& .image-thumb": {
      position: "relative",
      width: 100,
      height: 120,
      cursor: "pointer",
      border: "2px solid transparent",
      transition: "border 300ms",
      userSelect: "none",
    },

    "& .image-thumb.active": {
      borderColor: "$primary",
    },
  },

  "& .carousel": {
    flexBasis: "100%",
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },

  "& .magnifier-container": {
    width: "100%",
    margin: "auto",
    "& img": { height: "80vh" },
  },
});

// ------------------------------------

export const DetailBox = styled("div", {
  position: "relative",
  width: "100%",
  "@lg": { width: "60%", textAlign: "left" },

  "& .portal": {
    position: "absolute",
    top: 0,
    left: 0,
  },

  "& .product-title": {
    fontSize: "1.3rem",
    fontWeight: 700,
    lineHeight: 1.2,
    textAlign: "left",
    color: "#222",
    marginBottom: "0.5rem",
    marginTop: -5,
  },

  "& .product-meta": {
    display: "flex",
    alignItems: "center",
    gap: 18,
    fontSize: 14,
    lineHeight: 1.86,
    color: "#999",

    "& a": { cursor: "pointer", "&:hover": { color: "$primary" } },
  },

  "& .price": {
    fontWeight: 800,
    fontSize: 30,
    color: "#D26E4B",
    marginTop: 10,
  },

  "& del": {
    display: "inline",
    verticalAlign: "bottom",
    fontWeight: 700,
    fontSize: 22,
    color: "#C5C5C5",
    margin: "2rem 0",
  },

  "& .summary-desc": {
    color: "#999",
    margin: "1rem 0 2rem 0",
    fontSize: 14,
    lineHeight: 1.2,
  },
});

// ------------------------------------

export const ProductQuantity = styled("div", {
  display: "inline-block",
  marginTop: "2rem",
  marginRight: 18,

  "& button": {
    padding: "0 12px",
    border: "1px solid #ccc",
    fontSize: 18,
    lineHeight: 1,
    height: 40,
    background: "transparent",
    cursor: "pointer",
  },

  "& input": {
    height: 40,
    width: 48,
    fontSize: 18,
    fontWeight: 700,
    border: "solid #ccc",
    borderWidth: "1px 0",
    textAlign: "center",
  },

  // remove arrows from input type number
  // firefox:
  "& input[type=number]": {
    " -moz-appearance": "textfield",
  },

  // other browsers:
  "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
});

// ------------------------------------

export const AttributeGroup = styled(ToggleGroupPrimitive.Root, {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  backgroundColor: "transparent",
  margin: "0.57rem 0",

  "& .attribute": {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    textAlign: "left",

    "& span": { flex: 1 },

    "& div": { flex: 2, "@lg": { flex: 5 } },
  },
});

export const AttributeItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  color: "#111",
  height: "22px",
  padding: "0px 7px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1,
  border: "1px solid #ddd",
  margin: "4px 3px",
  transition: "all 150ms",
  cursor: "pointer",

  "&:hover": { borderColor: "$primary" },
  "&[data-state=on]": {
    backgroundColor: "$primary",
    color: "white",
  },
});
