import { styled } from "@/stitches.config";

export const Form = styled("form", {
  width: "100%",
  "@lg": { width: "50%" },

  "& h3": { marginBottom: "2rem", fontSize: 16 },

  "& .input-field": { margin: "1rem 0" },

  "& textarea": {
    resize: "vertical",
    width: "100%",
    minHeight: 150,
    padding: 10,
    borderRadius: 4,
    border: "1px solid #d4d4d4",
    marginTop: 10,

    "&:focus": { borderColor: "$primary" },
  },

  "& label": { fontSize: 14, fontWeight: 500 },

  "& button": { marginTop: "2rem" },
});
