import { styled } from "@/stitches.config";
import { Button, Flex } from "@/components/Shared";

export const ShopProductsContainer = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  columnGap: 8,
  rowGap: 48,
  marginTop: "3rem",
  position: "relative",
});

export const AddToCartButton = styled(Button, {
  width: "100%",
  fontSize: 14,
  lineHeight: "34px",
  color: "#888",
  border: "1px solid #e6e6e6",
  padding: "2px 10px",
  transition: "all 300ms",

  "&:hover": {
    borderColor: "$primary",
    backgroundColor: "$primary",
    color: "white",
  },
});

// -----------------------------------------
export const PageContainer = styled(Flex, {
  marginTop: "2rem",
  flexDirection: "column",
  gap: 16,
  alignItems: "center",

  "@lg": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 0,
  },
});

export const PageButton = styled(Button, {
  display: "inline",
  width: "fit-content",
  padding: "0px 14px",
  fontSize: 14,
  lineHeight: "35px",
  fontWeight: 700,
  textAlign: "center",
  border: "1px solid #e6e6e6",
  backgroundColor: "transparent",
  transition: "all 300ms",

  "&:hover": { backgroundColor: "$primary", color: "white" },
  "&:disabled, &[disabled]": {
    backgroundColor: "#e1e1e1",
    color: "black",
    cursor: "default",
  },

  variants: {
    active: {
      true: {
        backgroundColor: "$primary",
        color: "white",
      },
    },
  },
});
