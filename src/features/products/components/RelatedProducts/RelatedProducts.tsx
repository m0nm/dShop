import React from "react";
import { IProduct } from "../..";
import { ProductCarousel } from "../ProductCarousel";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductLabel } from "../../styles/productLabel";

const styles = {
  width: "100%",
  marginTop: "3rem",
};

export const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: IProduct[];
}) => {
  const items = relatedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div style={styles}>
      <ProductLabel>RELATED PRODUCTS</ProductLabel>
      <ProductCarousel>{items}</ProductCarousel>
    </div>
  );
};
