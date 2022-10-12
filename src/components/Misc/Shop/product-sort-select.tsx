import React from "react";
import Select, { StylesConfig } from "react-select";
import { SelectStyles } from "@/components/Shared";
import { useShopProductStore } from "@/features/products";

const options = [
  { label: "Default", value: "default" },
  { label: "Latest", value: "latest" },
  { label: "Price: lowest to highest", value: "price-low-to-high" },
  { label: "Price: higher to lower", value: "price-high-to-low" },
];

const styles: StylesConfig = {
  ...SelectStyles,
  menu: (styles) => ({
    ...styles,
    width: "100%",
    zIndex: 100,
  }),
};

export const ProductSortSelect = () => {
  const { filter_sort, setFilterSort, setFilterPrice } = useShopProductStore();

  type selectOption = { label: string; value: typeof filter_sort };

  const handleChange = (option: selectOption) => {
    const { value } = option;
    setFilterSort(value);

    // reset price slider to full range when sort filter is applied
    if (value !== "default") {
      setFilterPrice([0, 2000]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Select
        instanceId="select-product-sort-id-7589423"
        onChange={(option) => handleChange(option as selectOption)}
        options={options}
        placeholder={options[0].label}
        isClearable={false}
        isSearchable={false}
        styles={styles}
      />
    </div>
  );
};
