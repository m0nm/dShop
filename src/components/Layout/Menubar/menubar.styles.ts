import { Flex } from "@/components/Shared";
import { styled } from "@/stitches.config";

export const MenubarContainer = styled(Flex, {
  width: "100%",
  backgroundColor: "$primary",

  variants: {
    fixed: {
      true: {
        position: "fixed",
        top: 0,
        zIndex: 40,
      },
    },
  },
});

export const MenubarItem = styled("li", {
  fontSize: 16,
  fontWeight: 600,
  color: "#f1f1f1",
  padding: "13px 20px",
  transition: "background 300ms",

  "&:hover": {
    backgroundColor: "#444",
  },
});
