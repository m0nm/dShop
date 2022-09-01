import { styled } from "@/stitches.config";
import { Flex } from "@/components/Shared";

export const NavbarItem = styled(Flex, {
  gap: 4,
  cursor: "pointer",
});

export const Badge = styled("div", {
  color: "#fff",
  fontSize: "12px",
  textAlign: "center",
  lineHeight: "12px",
  display: "block",
  padding: 1.5,
  borderRadius: 2,
  minWidth: 50,

  variants: {
    variant: {
      cart: {
        background: "$primary",
      },

      wishlist: {
        background: "#888",
      },
    },
  },
});
