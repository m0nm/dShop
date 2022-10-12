import React from "react";
import Select from "react-select";
import { useShopProductStore } from "@/features/products";
import { useCategory } from "../../hooks/useCategory";
import { SelectStyles } from "@/components/Shared";

type IOption = { label: string; value: number };

export const SelectCategory = () => {
  const { data } = useCategory();

  const options = data?.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  options?.unshift({ label: "All categories", value: -1 });

  const { setFilterCategory } = useShopProductStore();

  const onChange = (option: unknown) => {
    const { value } = option as IOption;
    setFilterCategory(value);
  };

  return (
    <Select
      instanceId="select-category-id-35874235"
      options={options}
      placeholder="All categories"
      defaultValue={-1}
      onChange={onChange}
      styles={SelectStyles}
      isClearable={false}
      isSearchable={false}
    />
  );
};
