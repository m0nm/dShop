import { styled } from "@/stitches.config";

export const FooterTop = styled("div", {
  backgroundColor: "$primary",
  color: "white",
  marginTop: "4rem",
  padding: "0 4rem",
});

export const FooterTopItem = styled("li", {
  width: "100%",
  padding: "30px 5px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,

  "& .info": { textAlign: "center", "@lg": { textAlign: "left" } },

  "& .name": { fontSize: 16, lineHeight: "28px", fontWeight: 700 },

  "& .desc": { color: "#888", fontSize: 14 },

  "& svg": { color: "white !important" },

  "@lg": {
    flexDirection: "row",
    justifyContent: "left",
    padding: "15px 5px",
    borderRight: "1px solid #444",
    width: "25%",
  },
});

// -----------------------------

export const FooterContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  width: "100%",
  marginTop: "2rem",
  gap: "2rem",
});

export const FooterContentItem = styled("div", {
  width: "100%",
  height: "100%",

  margin: "2rem 0",

  textAlign: "center",
  "@lg": { textAlign: "left" },

  "& .item-header": {
    fontSize: 18,
    color: "#111",
    lineHeight: "20px",
    fontWeight: 700,
    marginBottom: 30,
  },

  "& li": {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#444",
    margin: "30px 0",

    justifyContent: "center",
    "@lg": { justifyContent: "left" },
  },

  "& li.form": {
    flexDirection: "column",
    alignItems: "center",
    "@lg": { alignItems: "flex-start" },

    "& input[type='email']": {
      width: "100%",
      height: "45px",
      padding: "0 15px",
      fontSize: 13,
      color: "#808080",
      border: "1px solid #e6e6e6",
    },
  },
});

export const FooterBottom = styled("div", {
  background: "$primary",
  padding: 12,
  display: "grid",
  placeItems: "center",
  color: "#888",
  textAlign: "center",
});
