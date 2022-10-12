import React from "react";
import { Flex } from "@/components/Shared";
import { useShopProductStore } from "@/features/products";
import { FilterBadge } from "./shop.styles";

export const ActiveFilterBadge = () => {
  const { filter_subcategories } = useShopProductStore();

  return (
    <Flex alignCenter css={{ flexWrap: "wrap", gap: 10, marginTop: 10 }}>
      {filter_subcategories.length !== 0 && (
        <>
          <h3 style={{ fontSize: 12, fontWeight: 600 }}>Your Selections:</h3>

          {filter_subcategories.map((val) => (
            <FilterBadge key={val}>{val}</FilterBadge>
          ))}
        </>
      )}
    </Flex>
  );
};
