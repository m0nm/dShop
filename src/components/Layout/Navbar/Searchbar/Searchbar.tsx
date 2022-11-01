import { useRouter } from "next/router";
import React, { FormEvent, useRef } from "react";
import { useShopProducts, useShopProductStore } from "@/features/products";
import { SelectCategory } from "@/features/categories";
import { Icon } from "ts-react-feather-icons";
import {
  SearchbarButton,
  SearchbarForm,
  SearchbarInput,
} from "./searchbar.styles";

export const Searchbar = () => {
  const router = useRouter();

  const { setFilterSearch, setFilterPrice } = useShopProductStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const search = inputRef.current?.value || "";

    setFilterSearch(search);

    // reset price to full range
    setFilterPrice([0, 2000]);

    router.push({
      pathname: "/shop",
      query: {
        search,
      },
    });
  };

  return (
    <SearchbarForm onSubmit={handleSubmit}>
      <SearchbarInput
        required
        ref={inputRef}
        placeholder="Search a product..."
      />
      <SelectCategory />

      <SearchbarButton>
        <Icon name="search" size="20" />
      </SearchbarButton>
    </SearchbarForm>
  );
};
