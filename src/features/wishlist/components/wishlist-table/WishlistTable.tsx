import React from "react";
import { useGetWishlist } from "../..";
import { WishlistItem } from "./WishlistItem";
import { LoadingOverlay } from "@/components/Shared";
import { Box, Table } from "./wishlist-table.styles";

export const WishlistTable = () => {
  const { data, isFetching } = useGetWishlist();

  return (
    <Box>
      {isFetching && <LoadingOverlay />}

      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th className="stock-status">Stock Status</th>
            <th className="product-price">Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item) => (
            <WishlistItem product={item} key={item.id} />
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
