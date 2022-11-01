import { styled } from "@/stitches.config";

export const Wrapper = styled("aside", {
  width: "100%",
  padding: "1.5rem 12px",
  border: "1px solid #d4d4d4",

  "@lg": {
    width: "50%",
  },

  "& .heading": { marginBottom: "1rem", fontSize: 18 },

  "& table": {
    width: "100%",
    marginBottom: "1rem",

    "& tr": { height: 52 },

    "& td": { width: "30%" },

    "& td:nth-child(even)": { paddingLeft: "5rem" },
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

  "& .coupon label": { fontSize: 14 },

  "& button": {
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    padding: 10,

    "&.checkout-btn": {
      color: "white",
      backgroundColor: "$primary",
      textTransform: "uppercase",
    },

    "&.coupon-btn": {
      color: "#000",
      backgroundColor: "transparent",
      border: "1px solid $primary",
      fontSize: 14,
      marginTop: 7,
      marginBottom: "3rem",

      "&:disabled, &[disabled]": {
        backgroundColor: "#E4EAEC",
        color: "#999",
        cursor: "not-allowed",
        border: 0,
      },
    },
  },
});
