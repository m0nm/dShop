import React from "react";
import Select, { StylesConfig } from "react-select";
import { SelectStyles } from "@/components/Shared";
import { useShopProductStore } from "@/features/products";

const options = [
  { label: "10 per page", value: 10 },
  { label: "15 per page", value: 15 },
  { label: "20 per page", value: 20 },
  { label: "25 per page", value: 25 },
  { label: "30 per page", value: 30 },
];

const styles: StylesConfig = {
  ...SelectStyles,

  container: () => ({
    fontSize: 13,
    width: 140,
    border: "none",
    outline: "none",
  }),

  menu: (styles) => ({
    ...styles,
    width: "100%",
    zIndex: 100,
  }),
};

export const ProductPageSelect = () => {
  const { filter_page_count, setFilterPageCount } = useShopProductStore();

  type selectValue = { label: string; value: typeof filter_page_count };

  const handleChange = (value: selectValue) => {
    setFilterPageCount(value.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <Select
        instanceId="select-product-sort-id-7589423"
        onChange={(value) => handleChange(value as selectValue)}
        options={options}
        placeholder={options[0].label}
        defaultValue={null}
        isClearable={false}
        isSearchable={false}
        styles={styles}
      />
    </div>
  );
};
