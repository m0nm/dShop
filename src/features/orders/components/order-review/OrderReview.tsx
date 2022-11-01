import React from "react";
import { useGetCart } from "@/features/cart";
import { useCartTotalStore } from "@/features/cart";
import { useConvertCurrency } from "@/hooks";
import { useCheckout } from "../../hooks/useCheckout";

import { PaymentMethods } from "./payment-methods";
import { OrderBtn, Wrapper } from "./order-review.styles";

export const OrderReview = () => {
  const { data } = useGetCart();
  const { total } = useCartTotalStore();
  const { convertCurrency } = useConvertCurrency();
  const { isLoading, isSuccess } = useCheckout();

  return (
    <Wrapper>
      <h3 className="heading">Your order</h3>

      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Product</th>
            <th style={{ textAlign: "right" }}>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item) => (
            <tr key={item.product.id}>
              <td className="product-name">
                {item.product.name}{" "}
                <span className="product-qty">x{item.quantity}</span>
              </td>
              <td>
                {convertCurrency(item.product.sale_price ?? item.product.price)}
              </td>
            </tr>
          ))}

          <tr>
            <td>Total</td>
            <td className="total-price">{convertCurrency(total)}</td>
          </tr>
        </tbody>
      </table>

      <PaymentMethods />

      <OrderBtn
        form="checkout-form"
        type="submit"
        disabled={isLoading || isSuccess}
        variant="primary"
      >
        Place Order
      </OrderBtn>
    </Wrapper>
  );
};
