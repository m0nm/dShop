import Link from "next/link";
import React from "react";
import { styled } from "@/stitches.config";
import { Icon } from "ts-react-feather-icons";

const Button = styled("button", {
  fontWeight: 700,
  fontSize: 12,
  textTransform: "uppercase",
  color: "white",
  backgroundColor: "$primary",
  padding: "14px 1.2rem",
  display: "inline-flex",
  alignItems: "center",
  marginTop: "2rem",
  cursor: "pointer",

  "& span": { marginLeft: 10 },

  "& svg": { color: "white" },
});

export const BackButton = () => {
  return (
    <Link href="/shop">
      <a>
        <Button>
          <Icon name="arrow-left" size={17} />
          <span>continue shopping</span>
        </Button>
      </a>
    </Link>
  );
};
