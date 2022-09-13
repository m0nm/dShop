import { Flex } from "@/components/Shared";
import { styled } from "@/stitches.config";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// *-------------------------------
export const ShopContainer = styled(Flex, {
  flexDirection: "column",
  "@lg": { flexDirection: "row" },
  gap: 18,
  width: "100%",
});

// --------------------------------
export const WidgetContainer = styled("aside", {
  border: "1px solid #e6e6e6",
  background: "white",
  padding: "20px 10px",
  width: "100%",
  "@lg": { width: "30%" },

  "& figure": {
    position: "relative",
    width: "100%",
    height: "380px",
    marginTop: "2rem",
  },
});

export const WidgetTitle = styled("h3", {
  fontWeight: 700,
  fontSize: 14,
  textTransform: "uppercase",
  marginBottom: "20px",
});

// --------------------------------------

export const Slider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "80%",

  '&[data-orientation="horizontal"]': {
    height: 20,
  },
});

export const SliderTrack = styled(SliderPrimitive.Track, {
  backgroundColor: "#aaa",
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

export const SliderRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  backgroundColor: "$primary",
  borderRadius: "9999px",
  height: "100%",
});

export const SliderThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "$primary",
  borderRadius: 10,
});

export const SliderButton = styled("button", {
  all: "unset",
  padding: "10px 12px",
  background: "#444",
  color: "white",
  fontWeight: 600,
  fontSize: 13,
  transition: "background 400ms",
  cursor: "pointer",

  "&:hover": {
    background: "$primary",
  },
});

// --------------------------------------------------------

export const SizeToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  gap: 12,
  backgroundColor: "transparent",
});

export const SizeToggleGroupItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  color: "#111",
  height: "43px",
  width: "43px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 700,
  lineHeight: 1,
  borderRadius: "50%",
  border: "1px solid #ddd",
  transition: "all 150ms",
  cursor: "pointer",

  "&:hover": { backgroundColor: "$primary", color: "white" },
  "&[data-state=on]": {
    backgroundColor: "$primary",
    color: "white",
  },
});

// --------------------------------

export const ContentContainer = styled("section", {
  width: "100%",
  "@lg": { width: "70%" },

  "& figure": {
    position: "relative",
    width: "100%",
    height: "250px",
    marginBottom: "2rem",
  },

  "& h3": {
    fontWeight: 700,
    fontSize: 14,
    textTransform: "uppercase",
  },

  "& span": {
    fontSize: 13,
    color: "#666",
  },
});

export const ContentOptions = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "& h3,span": { display: "none" },

  "@lg": {
    alignItems: "center",
    "& h3,span": { display: "inline" },
  },
});

// ----------------------------------------

export const FilterBadge = styled("div", {
  backgroundColor: "#e6e6e6",
  fontSize: 14,
  fontWeight: 600,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  gap: 4,
  borderRadius: 2,
  padding: 6,
});
