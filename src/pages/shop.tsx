import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Breadcrumb, Container, Flex } from "@/components/Shared";
import {
  ContentContainer,
  PriceSlider,
  ProductPageSelect,
  ProductSortSelect,
  SizeToggle,
  WidgetContainer,
  WidgetTitle,
  ActiveFilterBadge,
  ContentOptions,
  ShopContainer,
} from "@/components/Misc/Shop";
import { CategoryAccordion } from "@/features/categories";
import { ShopProducts } from "@/features/products";
import widgetBanner from "@/../public/mini-banners/5.jpg";
import contentBanner from "@/../public/mini-banners/6.jpg";

const Shop = () => {
  return (
    <Container flexCol>
      <Head>
        <title>dShop | Shop</title>
      </Head>

      <Breadcrumb content="Shop" />

      <ShopContainer>
        <WidgetContainer>
          <WidgetTitle>All Categories</WidgetTitle>
          <CategoryAccordion />

          <WidgetTitle css={{ marginTop: "2rem" }}>Price Range</WidgetTitle>
          <PriceSlider />

          <WidgetTitle css={{ marginTop: "2rem" }}>Size</WidgetTitle>
          <SizeToggle />

          <figure>
            <Image src={widgetBanner} alt="" layout="fill" quality={100} />
          </figure>
        </WidgetContainer>

        <ContentContainer>
          <figure>
            <Image src={contentBanner} alt="" layout="fill" quality={100} />
          </figure>

          <ContentOptions
            css={{
              justifyContent: "space-between",
              "& h3,span": { display: "none" },

              "@lg": {
                alignItems: "center",
                "& h3,span": { display: "inline" },
              },
            }}
          >
            <h3>Products</h3>
            <Flex alignCenter>
              <span>SORT BY: </span>

              <ProductSortSelect />
            </Flex>

            <Flex alignCenter>
              <span>SHOW: </span>
              <ProductPageSelect />
            </Flex>
          </ContentOptions>

          {/* active filters */}
          <ActiveFilterBadge />

          <ShopProducts />
        </ContentContainer>
      </ShopContainer>
    </Container>
  );
};

export default Shop;
