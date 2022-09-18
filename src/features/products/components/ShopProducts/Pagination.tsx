import React from "react";
import { Flex } from "@/components/Shared";
import { PageButton as Button, PageContainer } from "./shopProducts.styles";

{
  /* had to use props instead of useShopProducts bcz its async */
}
type IProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  firstItem: number;
  lastItem: number;
  totalItems: number;
  lastPage: number;
  isPreviousData: boolean;
  pagesArray: number[];
};

export const Pagination = ({
  setPage,
  page,
  firstItem,
  lastItem,
  totalItems,
  lastPage,
  isPreviousData,
  pagesArray,
}: IProps) => {
  return (
    <PageContainer>
      {/* info */}
      {lastItem && (
        <p style={{ fontSize: 14 }}>
          Showing {firstItem} - {lastItem} of {totalItems}
        </p>
      )}

      {/* buttons */}
      <Flex alignCenter>
        {lastPage > 1 && (
          <Button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={isPreviousData || page === 1}
          >
            prev
          </Button>
        )}

        {pagesArray.map((pg) => {
          return (
            <Button key={pg} onClick={() => setPage(pg)} active={page === pg}>
              {pg}
            </Button>
          );
        })}

        {lastPage > 1 && (
          <Button
            onClick={() => setPage((old) => old + 1)}
            disabled={
              isPreviousData || page === pagesArray[pagesArray.length - 1]
            }
          >
            next
          </Button>
        )}
      </Flex>
    </PageContainer>
  );
};
