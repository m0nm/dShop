import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../api";
import { Container } from "@/components/Shared";
import { LatestProducts } from "./latest-products";
import { SaleProducts } from "./sale-products";
import { FeaturedProducts } from "./featured-products";
import {
  filterFeaturedProducts,
  filterLatestProducts,
  filterSaleProducts,
} from "../../utils/filter-home-products";

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
