import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../api";
import {
  filterFeaturedProducts,
  filterLatestProducts,
  filterSaleProducts,
} from "../../utils/filterHomeProducts";
import { Container } from "@/components/Shared";
import { LatestProducts } from "./LatestProducts";
import { SaleProducts } from "./SaleProducts";
import { FeaturedProducts } from "./FeaturedProducts";

export const HomeProducts = () => {
  const { data: products } = useQuery("products", getProducts);
  const saleProducts = filterSaleProducts(products);
  const latestProducts = filterLatestProducts(products);
  const featuredProducts = filterFeaturedProducts(products);

  return (
    <Container flexCol>
      <SaleProducts saleProducts={saleProducts} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <LatestProducts latestProducts={latestProducts} />
    </Container>
  );
};
