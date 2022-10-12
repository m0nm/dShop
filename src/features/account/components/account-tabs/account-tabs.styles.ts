import { styled } from "@/stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const AccountTabsContainer = styled(TabsPrimitive.Root, {
  display: "flex",
  justifyContent: "center",
  marginTop: "4rem",
  width: "100%",

  flexDirection: "column",
  "@lg": { flexDirection: "row" },
});

export const TabsList = styled(TabsPrimitive.List, {
  height: "100%",
  marginRight: "4rem",
  width: "100%",

  "@lg": { width: "20%" },
});

export const TabTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  width: "100%",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  color: "#3F484E",
  fontSize: 14,
  fontWeight: 700,
  padding: "10px",
  margin: "1rem 0",
  borderRadius: 3,
  transition: "all 250ms",
  cursor: "pointer",

  "& span": {
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  "&:hover": { color: "$primary", backgroundColor: "#e5e5e5" },

  '&[data-state="active"]': {
    color: "white",
    backgroundColor: "#333",
  },
});

export const TabContent = styled(TabsPrimitive.Content, {
  height: "100%",
  outline: "none",
  width: "100%",
  textAlign: "center",

  "@lg": {
    width: "80%",
    padding: "2rem 4rem",
    boxShadow: "0 0 5px #aaaa",
    textAlign: "left",
  },

  "& .title": {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: "3rem",
    color: "black",
  },

  "& .sub-title": {
    fontSize: 18,
    padding: "1rem 0",
    marginBottom: "2rem",
    borderBottom: "1px solid #CED1D3",
  },

  "& form": {
    width: "100%",
    "@lg": { width: "50%" },
  },

  "& .input-field": { marginBottom: "2rem" },

  "& label": {
    textAlign: "left",
    display: "block",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: 700,
  },

  "& button": {
    all: "unset",
    fontSize: 14,
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "1rem 2rem",
    backgroundColor: "$primary",
    color: "white",
    width: "fit-content",
    borderRadius: 5,
    marginTop: "1rem",
    transition: "all 300ms",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#555",
    },
  },

  "& .products-link": {
    display: "inline-block",
    marginTop: "1rem",
    color: "$primary",
    fontWeight: 500,

    "&::after": {
      content: "",
      display: "block",
      width: "100%",
      height: 1,
      background: "black",
      marginTop: 4,
      opacity: 0,
      transition: "all 300ms",
    },

    "&:hover": {
      "&::after": { opacity: 1 },
    },
  },
});
