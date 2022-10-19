import { Button } from "@/components/Shared";
import { styled } from "@/stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

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

export const SocialButton = styled(Button, {
  width: "100%",
  gap: 4,
  fontSize: 14,
  borderRadius: "18px",
  border: 0,
  padding: "0.5rem",
  marginBottom: 12,

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

export const Label = styled("label", {
  fontSize: "14px",
  fontWeight: 300,
  color: "$neutral",
});

export const ForgotPasswordButton = styled(Button, {
  fontSize: 13,
  float: "right",
});

export const SubmitButton = styled(Button, {
  width: "100%",
  background: "$primary",
  fontWeight: 500,
  fontSize: 16,
  padding: "10px 0",
  color: "white",
  marginTop: 16,
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

export const Checkbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "transparent",
  height: 10,
  width: 10,
  border: "1px solid #aaa",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CheckboxLabel = styled("label", {
  fontSize: 14,
  fontWeight: 400,
  userSelect: "none",
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {});
