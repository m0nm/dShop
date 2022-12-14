import { styled } from "@/stitches.config";
import { Button } from "@/components/Shared";

export const Table = styled("table", {
  width: "100%",

  "& th": {
    margin: "0 1rem",
    paddingBottom: 12,
    color: "#999",
    fontSize: 14,
    lineHeight: 1,
    textTransform: "uppercase",

    "&:first-child": {
      textAlign: "left",
    },

    display: "none",
    "@lg": { display: "table-cell" },
  },
});

export const TableRow = styled("tr", {
  "&:nth-child(even)": { backgroundColor: "#f1f1f1" },
  "& td": { padding: "2rem 0", textAlign: "center" },

  "& .product-name": {
    position: "relative",
    width: "70%",

    "& > div": {
      width: "100%",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",

      "& figure": {
        position: "relative",
        width: 80,
        height: 80,
      },

      "& span": {
        margin: "0 1rem",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1,
        cursor: "pointer",
        textAlign: "left",
        overflow: "hidden",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
      },
    },
  },

  "& .product-price ": {
    textAlign: "center",

    "& > span": {
      paddingLeft: "3rem",
      "@lg": { paddingLeft: 0 },
    },
  },

  "& .product-quantity ": {
    "& > div": {
      display: "inline-flex !important",
      margin: "0 !important",
      transform: "scale(0.77)",
    },
  },

  "& .product-subtotal": {
    fontWeight: 600,
    width: "5rem",
    textAlign: "center",
  },

  "& .remove": {
    width: 23,
    paddingLeft: "2rem",
    "@lg": { paddingLeft: 10 },

    "& svg": { cursor: "pointer" },
  },
});

export const UpdateButton = styled(Button, {
  fontWeight: 700,
  fontSize: 13,
  textTransform: "uppercase",
  color: "black",
  backgroundColor: "transparent",
  border: "1px solid black",
  padding: "14px 1.2rem",
  display: "inline-flex",
  marginTop: "2rem",
  float: "right",

  "&:disabled, &[disabled]": {
    backgroundColor: "#E4EAEC",
    color: "#999",
    cursor: "not-allowed",
    border: 0,
  },
});
