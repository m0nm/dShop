import { styled } from "@/stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export const Checkbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "white",
  width: 12,
  height: 12,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CheckboxLabel = styled("label", {
  fontSize: 14,
  fontWeight: 400,
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {});
