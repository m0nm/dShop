import { styled } from "@/stitches.config";

export const Form = styled("form", {
  position: "relative",

  width: "100%",
  "@lg": { width: "50%" },

  "& .sub-title": { display: "none" },

  "& .input-field": { marginBottom: "1.2rem" },

  "& label": {
    textAlign: "left",
    display: "block",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: 700,
  },
});
