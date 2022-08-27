import { styled } from "@/stitches.config";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 3,
  backgroundColor: "white",
});

export const SelectPortal = styled(SelectPrimitive.Portal, {
  position: "relative",
});

export const SelectContent = styled(SelectPrimitive.Content, {
  position: "absolute",
  top: "2rem",
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 10px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const SelectViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

export const SelectItem = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$neutral",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  cursor: "pointer",
  userSelect: "none",

  "&[data-highlighted]": {
    color: "$primary",
  },
});

// Exports
// export const Select = SelectPrimitive.Root;
// export const SelectTrigger = StyledTrigger;
// export const SelectValue = SelectPrimitive.Value;
// export const SelectIcon = StyledIcon;
// export const SelectContent = Content;
// export const SelectViewport = StyledViewport;
// export const SelectGroup = SelectPrimitive.Group;
// export const SelectItem = StyledItem;
// export const SelectItemText = SelectPrimitive.ItemText;
// export const SelectItemIndicator = StyledItemIndicator;
// export const SelectLabel = StyledLabel;
// export const SelectSeparator = StyledSeparator;
