import React from "react";
import { SelectCategory } from "@/features/categories";
import { Icon } from "ts-react-feather-icons";
import {
  SearchbarButton,
  SearchbarForm,
  SearchbarInput,
} from "./searchbar.styles";

export const Searchbar = () => {
  return (
    <SearchbarForm alignCenter>
      <SearchbarInput placeholder="Search a product..." />
      <SelectCategory />

      <SearchbarButton>
        <Icon name="search" size="20" />
      </SearchbarButton>
    </SearchbarForm>
  );
};
