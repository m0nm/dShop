import { styled } from "@/stitches.config";

export const Box = styled("div", {
  position: "relative",
  whiteSpace: "nowrap",
  overflowX: "auto",
  margin: "auto",

  width: "100%",
  "@lg": { width: "90%" },
});

export const Table = styled("table", {
  width: "100%",

  "& th": {
    margin: "0 1rem",
    paddingBottom: 12,
    color: "#999",
    fontSize: 14,
    lineHeight: 1,
    textTransform: "uppercase",
    textAlign: "left",

    "&.stock-status": { textAlign: "center" },

    "&.product-price": {
      textAlign: "center",
      padding: "0 1rem 12px 1rem",
    },

    display: "none",
    "@lg": { display: "table-cell" },
  },
});

export const TableRow = styled("tr", {
  "&:nth-child(even)": { backgroundColor: "#f1f1f1" },

  "& td": { padding: "1rem 0" },

  "& .product-name": {
    "& figure": {
      position: "relative",
      width: 80,
      height: 80,
    },

    "& span": {
      marginLeft: "1rem",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.3,
      cursor: "pointer",
      textAlign: "left",
    },
  },

  "& .stock-status": { textAlign: "center" },

  "& .product-price ": {
    textAlign: "center",

    "& > span": {
      paddingLeft: "3rem",
      "@lg": { paddingLeft: 0 },
    },
  },

  "& .remove": {
    width: 23,
    paddingRight: "2rem",

    "& svg": { cursor: "pointer" },
  },

  "& .cart-btn": { transform: "scale(0.85)", paddingLeft: "3rem" },
});
