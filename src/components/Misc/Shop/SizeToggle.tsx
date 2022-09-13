import React from "react";
import { useShopProductStore } from "@/features/products";
import { SizeToggleGroup, SizeToggleGroupItem } from "./shop.styles";

export const SizeToggle = () => {
  const { filter_size, setFilterSize, setFilterSearch } = useShopProductStore();

  // clear search if exist
  const handleChange = (value: string) => {
    setFilterSize(value as typeof filter_size);
    setFilterSearch(undefined);
  };

  return (
    <SizeToggleGroup
      type="single"
      value={filter_size as string}
      onValueChange={handleChange}
    >
      <SizeToggleGroupItem value="S">S</SizeToggleGroupItem>
      <SizeToggleGroupItem value="M">M</SizeToggleGroupItem>
      <SizeToggleGroupItem value="L">L</SizeToggleGroupItem>
      <SizeToggleGroupItem value="XL">XL</SizeToggleGroupItem>
      <SizeToggleGroupItem value="2XL">2XL</SizeToggleGroupItem>
    </SizeToggleGroup>
  );
};
