import Image from "next/image";
import React from "react";
import { IProduct } from "../..";
import { ProductLabel } from "./homeProducts.styles";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductCarousel } from "./ProductCarousel";
import miniBanner from "@/../public/mini-banners/2.jpg";

type IProps = {
  featuredProducts: IProduct[] | undefined;
};

export const FeaturedProducts = ({ featuredProducts }: IProps) => {
  const items = featuredProducts?.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <section style={{ width: "100%" }}>
      <ProductLabel variant="featured">Featured Products</ProductLabel>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 240,
          marginBottom: "1rem",
        }}
      >
        <Image src={miniBanner} alt="" layout="fill" quality={100} />
      </div>

      <ProductCarousel>{items}</ProductCarousel>
    </section>
  );
};
