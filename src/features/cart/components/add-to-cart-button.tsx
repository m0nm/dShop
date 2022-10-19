import React from "react";
import { styled } from "@/stitches.config";
import { IProduct } from "@/features/products";
import { useAddToCart } from "..";
import { Button as BasicButton } from "@/components/Shared";

const Button = styled(BasicButton, {
  display: "inline-block",
  border: 0,
  fontSize: 15,
  lineHeight: 1,
  padding: "1rem 2rem",
  borderRadius: 3,
  textTransform: "uppercase",
  color: "white",
  backgroundColor: "$primary",
  transition: "all 300ms",

  "&:hover": {
    backgroundColor: "#252525",
  },

  "&:disabled, &[disabled]": {
    backgroundColor: "#E4EAEC",
    color: "#999",
    cursor: "not-allowed",
  },
});

type IProps = { product: IProduct; quantity: number };

export const AddToCart = ({ product, quantity }: IProps) => {
  const { handleAddToCart, isLoading } = useAddToCart(product, quantity);

  return (
    <Button disabled={quantity === 0 || isLoading} onClick={handleAddToCart}>
      add to cart
    </Button>
  );
};
