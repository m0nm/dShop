import React, { useMemo } from "react";
import { useCartTotalStore, useGetCart } from "../..";
import { CartItem } from "./cart-item";
import { useUpdateCartStore } from "../../store/update-cart-store";
import { useUpdateCart } from "../../hooks/useUpdateCart";

import { BackButton } from "../go-back-button";
import { Flex, LoadingOverlay } from "@/components/Shared";
import { Table, UpdateButton } from "./cart-table.styles";

export const CartTable = () => {
  const { data, isFetching } = useGetCart();
  const { updateItems, update } = useUpdateCartStore();
  const { handleUpdateCart, isLoading } = useUpdateCart();
  const { setTotal } = useCartTotalStore();

  const handleClick = () => {
    handleUpdateCart(updateItems);
  };

  let total = 0;
  useMemo(() => {
    data?.forEach((item) => {
      total += (item.product.sale_price || item.product.price) * item.quantity;
    });

    setTotal(total);
  }, [data, setTotal]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          whiteSpace: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {isFetching && <LoadingOverlay />}

        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}
          </tbody>
        </Table>
      </div>

      <Flex alignCenter css={{ justifyContent: "space-between" }}>
        <BackButton />

        <UpdateButton onClick={handleClick} disabled={isLoading || !update}>
          update
        </UpdateButton>
      </Flex>
    </div>
  );
};
