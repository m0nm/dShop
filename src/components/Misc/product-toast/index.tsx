import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "@/features/products";
import { styled } from "@/stitches.config";

const Box = styled("div", {
  width: 320,
  height: 280,
  padding: "12px 0",
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 0 10px #f9f9f9",
  textAlign: "center",
  marginLeft: "0.5rem",
  cursor: "default",

  "@lg": {
    width: 400,
    padding: "2rem",
    marginLeft: "0",
  },

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
    display: "inline-block",
    padding: "12px 2rem",
    fontWeight: 600,
    fontSize: 17,
    border: "1px solid $primary",
    cursor: "pointer",
    transition: "all 300ms",
    backgroundColor: "transparent",
    color: "$primary",
  },
});

type IToast = {
  product: IProduct;
  type: "Cart" | "Wishlist";
};

export const ProductToast = ({ product, type }: IToast) => {
  return (
    <Box>
      <h3>Successfully Added To {type}</h3>

      <Image
        src={product.images[0]}
        alt="added to cart"
        width="80"
        height="100"
      />

      <p>{product.name}</p>

      <Link href={"/" + type.toLowerCase()}>
        <button className="view">View {type}</button>
      </Link>
    </Box>
  );
};
