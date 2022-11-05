import { styled } from "@/stitches.config";

export const Box = styled("div", {
  position: "relative",
  width: "100%",
  "@lg": { width: "50%" },

  "& .card": {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    minHeight: 80,
    padding: 10,
    margin: "2rem 0",

    "& .avatar": {
      position: "relative",
      borderRadius: "50%",
      width: 60,
      height: 60,

      "& img": { borderRadius: "50%" },
    },

    "& .name": { color: "#222", fontSize: 14, marginTop: 5 },

    "& .comment": { marginTop: "1rem", color: "#666" },
  },
});
