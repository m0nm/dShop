import { Container } from "@/components/Shared";
import { styled } from "@/stitches.config";

export const MenubarRoot = styled("ul", {
  backgroundColor: "transparent",
  width: " 100%",

  "@lg": {
    backgroundColor: "$primary",
  },

  variants: {
    fixed: {
      true: {
        position: "fixed",
        top: 0,
        zIndex: 1200,
      },
    },
  },
});

export const MenubarContainer = styled(Container, {
  flexDirection: "column",
  gap: 4,
  backgroundColor: "transparent",
  color: "black",
  alignItems: "flex-start",

  "@lg": {
    flexDirection: "row",
    alignItems: "center",
    color: "#f1f1f1",
  },
});

export const MenubarItem = styled("li", {
  fontSize: 16,
  fontWeight: 600,
  padding: "13px 20px",
  transition: "background 300ms",
  cursor: "pointer",

  "@lg": {
    "&:hover": {
      backgroundColor: "#444",
    },
  },
});
