import { styled } from "@/stitches.config";

export const Form = styled("form", {
  padding: "0",

  "@md": {
    padding: "1rem",
  },
});

export const Title = styled("h1", {
  fontWeight: 600,
  fontSize: "32px",
  textAlign: "center",
});

export const SocialButton = styled("button", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  fontSize: 14,
  fontWeight: 600,
  borderRadius: "18px",
  border: 0,
  padding: "0.5rem",
  marginBottom: 12,
  cursor: "pointer",

  "&.ml": { gap: 8 },

  variants: {
    variant: {
      google: {
        background: "white",
        border: "1px solid #d4d4d4",
        color: "black",
      },

      facebook: {
        background: "#1877F2",
        color: "white",
      },
    },
  },
});

export const DividerText = styled("p", {
  color: "$neutral",
  margin: "1rem 0",
  fontSize: 14,
  textAlign: "center",
  pointerEvents: "none",
  userSelect: "none",
});

export const InputField = styled("div", { marginBottom: 10 });

export const Input = styled("input", {
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
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

export const Label = styled("label", {
  fontSize: "14px",
  fontWeight: 300,
  color: "$neutral",
});

export const InputFeedback = styled("p", {
  fontSize: 13,
  color: "$error",
  marginTop: 2,
});

export const ForgotPasswordButton = styled("button", {
  all: "unset",
  fontSize: 13,
  float: "right",
  cursor: "pointer",
});

export const SubmitButton = styled("button", {
  width: "100%",
  background: "$primary",
  fontWeight: 500,
  fontSize: 16,
  padding: "10px 0",
  color: "white",
  marginTop: 16,
  cursor: "pointer",
  border: "none",

  "&:hover": {
    background: "#3a3a3a",
  },

  variants: {
    disabled: {
      true: {
        background: "rgba(51,3,0,0.4)",
        pointerEvents: "none",
        cursor: "wait",
      },
    },
  },
});
