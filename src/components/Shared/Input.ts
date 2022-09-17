import { styled } from "@/stitches.config";

export const Input = styled("input", {
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 14,
  lineHeight: 1,
  height: 35,
  marginTop: 6,
  border: "1px solid #d4d4d4",

  "&:focus": { borderColor: "$primary" },

  variants: {
    invalid: {
      true: {
        borderColor: "$error",
      },
    },
  },
});

export const InputFeedback = styled("p", {
  fontSize: 13,
  color: "$error",
  marginTop: 2,
});
