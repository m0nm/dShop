import { Flex } from "@/components/Shared";
import { useShopProductStore } from "@/features/products";
import { useShopProducts } from "@/features/products";
import React from "react";
import {
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
  SliderButton,
} from "./shop.styles";

export const PriceSlider = () => {
  const { filter_price, setFilterPrice } = useShopProductStore();
  const { refetch } = useShopProducts();

  return (
    <>
      <Slider
        value={filter_price}
        onValueChange={setFilterPrice}
        max={2000}
        step={50}
        minStepsBetweenThumbs={1}
        aria-label="filter price"
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>

        <SliderThumb />
        <SliderThumb />
      </Slider>

      <Flex
        alignCenter
        css={{ marginTop: "16px", justifyContent: "space-between", gap: 12 }}
      >
        <p style={{ fontSize: 15, color: "#666" }}>
          price: (${filter_price[0]} - ${filter_price[1]})
        </p>

        <SliderButton onClick={() => refetch()}>FILTER PRICE</SliderButton>
      </Flex>
    </>
  );
};
