import { Button } from "@/components/Shared";
import { styled } from "@/stitches.config";

export const Wrapper = styled("aside", {
  position: "relative",
  width: "100%",
  padding: "1.5rem 12px",
  border: "1px solid #d4d4d4",

  "@lg": {
    width: "40%",
  },

  "& .heading": { marginBottom: "1rem", fontSize: 18 },

  "& table": {
    width: "100%",
    marginBottom: "1rem",

    "& th": { fontSize: 13 },

    "& tr": { height: 52 },

    "& td": { width: "30%", fontSize: 15 },

    "& td:nth-child(even)": { textAlign: "right" },

    "& td.product-name": {
      fontSize: 13,
      fontWeight: 500,
    },

    "& span.product-qty": {
      fontSize: 14,
      fontWeight: 700,
      paddingLeft: 4,
    },

    "& td.total-price": {
      fontSize: 28,
      fontWeight: 600,
    },
  },

  "& .shipping-options div": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 5,
  },

  "& input[type='radio']": {
    display: "inline-block",
    border: "1px solid #f5f5f5",
    borderRadius: "50%",
    backgroundColor: "white",
    color: "white",
    width: 14,
    height: 14,
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",

    "& ~ label": {
      cursor: "pointer",
      fontSize: 14,
    },
  },
});

export const OrderBtn = styled(Button, {
  width: "100%",
  padding: "10px 0",
  textTransform: "uppercase",
  marginTop: "4rem",

  "&:disabled, &[disabled]": {
    backgroundColor: "#E4EAEC",
    color: "#999",
    cursor: "not-allowed",

    "&:hover": {
      backgroundColor: "#E4EAEC",
      color: "#999",
      cursor: "not-allowed",
    },
  },
});
