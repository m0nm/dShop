import React from "react";
import { useCategory } from "../../hooks/useCategory";
import { useShopProductStore } from "@/features/products";
import { Icon } from "ts-react-feather-icons";
import {
  CategoryAccordionRoot,
  CategoryAccordionContent,
  CategoryAccordionItem,
  CategoryAccordionTrigger,
  CategoryToggleGroup,
  CategoryToggleGroupItem,
} from "./categoryAccordion.styles";
import Skeleton from "react-loading-skeleton";

// skeletons
const AccodionSkeleton = () => {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <Skeleton
        height={18}
        count={4}
        style={{ margin: "20px 0 0 10px", width: "80%" }}
      />
    </div>
  );
};

export const CategoryAccordion = () => {
  const { data } = useCategory();

  const { filter_subcategories, setFilterSubcategories, setFilterSearch } =
    useShopProductStore();

  const handleChange = (value: string[]) => {
    setFilterSubcategories(value);

    // clear seach if exist
    setFilterSearch(undefined);
  };

  if (!data) {
    return <AccodionSkeleton />;
  }

  return (
    <CategoryAccordionRoot type="single" collapsible>
      {data &&
        data.map((category) => {
          return (
            <CategoryAccordionItem key={category.id} value={category.name}>
              <CategoryAccordionTrigger>
                <span>{category.name}</span>
                <Icon name="chevron-down" size="18" />
              </CategoryAccordionTrigger>

              <CategoryAccordionContent>
                <CategoryToggleGroup
                  type="multiple"
                  value={filter_subcategories}
                  onValueChange={handleChange}
                >
                  {category?.subcategories?.map((subcategory) => (
                    <CategoryToggleGroupItem
                      key={subcategory.id}
                      value={subcategory.name}
                    >
                      <>
                        <Icon name="circle" size="7" />
                        <li>{subcategory.name}</li>
                      </>
                    </CategoryToggleGroupItem>
                  ))}
                </CategoryToggleGroup>
              </CategoryAccordionContent>
            </CategoryAccordionItem>
          );
        })}
    </CategoryAccordionRoot>
  );
};
