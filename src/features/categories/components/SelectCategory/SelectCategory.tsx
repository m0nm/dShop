import React from "react";
import Select from "react-select";
import { useCategory } from "../../hooks/useCategory";
import { SelectStyles } from "./selectCategory.styles";

export const SelectCategory = () => {
  const { data } = useCategory();

  const options = data?.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  options?.unshift({ label: "All categories", value: -1 });

  return (
    <Select
      instanceId="select-category-id-35874235"
      options={options}
      placeholder="All categories"
      defaultValue={-1}
      styles={SelectStyles}
      isClearable={false}
      isSearchable={false}
    />
  );
};
