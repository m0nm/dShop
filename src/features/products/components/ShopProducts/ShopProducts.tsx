import React from "react";
import { useShopProducts } from "../../hooks/useShopProducts";
import { Spinner } from "@/components/Misc/Spinner";
import { NotFound } from "@/components/Misc/Shop";
import { ProductCard, skeletons } from "../ProductCard/ProductCard";
import { ShopProductsContainer } from "./shopProducts.styles";
import { Pagination } from "./Pagination";

export const ShopProducts = () => {
  const {
    isFetching,
    isLoading,
    isPreviousData,
    products,
    page,
    setPage,
    pagesArray,
    lastPage,
    firstItem,
    lastItem,
    totalItems,
  } = useShopProducts();

  return (
    <>
      {!isLoading && !isFetching && !products?.length && <NotFound />}

      <ShopProductsContainer>
        {isLoading && skeletons}

        {(isLoading || isFetching) && <Spinner />}

        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </ShopProductsContainer>

      {/* pagination */}
      {/* had to use props instead of useShopProducts bcz its async */}
      <Pagination
        isPreviousData={isPreviousData}
        page={page}
        setPage={setPage}
        pagesArray={pagesArray}
        lastPage={lastPage}
        firstItem={firstItem as number}
        lastItem={lastItem as number}
        totalItems={totalItems as number}
      />
    </>
  );
};
