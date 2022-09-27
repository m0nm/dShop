import Image from "next/image";
import React from "react";
import { IProduct } from "../..";
import { ProductLabel } from "../../styles/productLabel";
import { ProductCard, skeletons } from "../ProductCard/ProductCard";
import { ProductCarousel } from "../ProductCarousel";
import miniBanner from "@/../public/mini-banners/1.jpg";

type IProps = {
  latestProducts: IProduct[] | undefined;
};

export const LatestProducts = ({ latestProducts }: IProps) => {
  const items = latestProducts?.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <section style={{ width: "100%" }}>
      <ProductLabel variant="new">Latest Products</ProductLabel>

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

      <ProductCarousel>{items || skeletons}</ProductCarousel>
    </section>
  );
};
