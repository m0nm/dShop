import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useShopProductStore } from "../store/shopProductStore";
import { getShopProducts } from "../api";

export const useShopProducts = () => {
  const [page, setPage] = useState(1);
  const {
    filter_subcategories,
    filter_page_count,
    filter_price,
    filter_size,
    filter_sort,
    filter_search,
    filter_category,
  } = useShopProductStore();

  const { isLoading, data, isFetching, isPreviousData, refetch } = useQuery(
    [
      "products",
      [
        page,
        filter_subcategories,
        filter_page_count,
        filter_size,
        filter_sort,
        filter_search,
      ],
    ],
    () =>
      getShopProducts(
        page,
        filter_page_count,
        filter_sort,
        filter_subcategories,
        filter_price,
        filter_size,
        filter_search,
        filter_category
      ),
    {
      keepPreviousData: true,
    }
  );

  const products = data?.data;
  const lastPage = data?.last_page || 1;
  const firstItem = data?.from;
  const lastItem = data?.to;
  const totalItems = data?.total;

  // pagination
  const pagesArray = Array.from(
    {
      length: ((data?.last_page as number) > 1
        ? data?.last_page
        : -1) as number,
    },
    (_, i) => i + 1
  );

  // reset to page 1 if filters applied
  useEffect(() => {
    setPage(1);
  }, [filter_sort, filter_size, filter_page_count, filter_subcategories]);

  // scroll to top of component after page change
  const scroll = isFetching && !isLoading;
  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 433);
    }
  }, [scroll]);

  return {
    isLoading,
    isFetching,
    isPreviousData,
    products,
    pagesArray,
    page,
    lastPage,
    setPage,
    firstItem,
    lastItem,
    totalItems,
    refetch,
  };
};
