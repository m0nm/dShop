import React from "react";

import { IProduct } from "../../api";
import { ProductLabel } from "../../styles/product-label.styles";
import { ProductCard, skeletons } from "../product-card/ProductCard";
import { ProductCarousel } from "../product-carousel";

type IProps = {
  saleProducts: IProduct[] | undefined;
};

export const SaleProducts = ({ saleProducts }: IProps) => {
  const items = saleProducts?.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <section style={{ width: "100%" }}>
      <ProductLabel variant="sale">On Sale</ProductLabel>
      <ProductCarousel>{items || skeletons}</ProductCarousel>
    </section>
  );
};
