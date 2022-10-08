import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "@/features/products";
import { styled } from "@/stitches.config";

const Box = styled("div", {
  width: 400,
  height: 280,
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 0 10px #f9f9f9",
  textAlign: "center",

  "& h3": {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    color: "black",
    marginBottom: 10,
  },

  "& p": {
    fontSize: 16,
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "2rem",
    marginLeft: 10,
  },

  "& button": {
    padding: "12px 2rem",
    fontWeight: 600,
    fontSize: 17,
    border: "1px solid $primary",
    backgroundColor: "transparent",
    color: "$primary",
    cursor: "pointer",
    transition: "all 300ms",

    "&:hover": {
      backgroundColor: "$primary",
      color: "white",
      borderColor: "transparent",
    },
  },
});

export const CartToast = ({ product }: { product: IProduct }) => {
  return (
    <Box>
      <h3>Successfully Added To Cart</h3>

      <Image
        src={product.images[0]}
        alt="added to cart"
        width="80"
        height="100"
      />

      <p>{product.name}</p>

      <Link href="/cart">
        <button>View Cart</button>
      </Link>
    </Box>
  );
};
