import React, { useEffect, useState, useMemo } from "react";
import { styled } from "@/stitches.config";
import { IOrder } from "@/features/orders";
import { useGetOrderDetail } from "@/features/orders";
import { Flex } from "@/components/Shared";

const Box = styled("div", {
  "& span": { fontSize: 14, lineHeight: 2.4, color: "#667070" },

  "& table": { marginBottom: "2rem" },

  "& tr": { lineHeight: "2.5rem" },
});

export const OrderDetail = () => {
  const [order, setOrder] = useState<IOrder>();
  const { data } = useGetOrderDetail();

  useEffect(() => {
    const order = JSON.parse(sessionStorage.getItem("order") as string);

    setOrder(order);
  }, []);

  let subtotal = 0;

  data?.forEach((item) => {
    subtotal += item.price * item.quantity;
  }, 0);

  const total = ((subtotal as number) + 15).toFixed(2);

  return (
    <Box>
      <h1 className="title">Order Details</h1>

      <h3 className="sub-title">Products</h3>

      <table style={{ width: "100%" }}>
        <thead>
          <tr></tr>
          <tr></tr>
        </thead>

        <tbody>
          {data?.map((item) => (
            <>
              <tr>
                <td>
                  <b>
                    {item?.product_name} x{item?.quantity}
                  </b>
                </td>

                <td>${item?.price * item.quantity}</td>
              </tr>
            </>
          ))}

          <tr>
            <td>Subtotal</td>
            <td>${subtotal}</td>
          </tr>

          <tr>
            <td>Shipping</td>
            <td>$15.00 via Flat rate</td>
          </tr>

          <tr>
            <td>Payment method:</td>
            <td>Cash on delivery</td>
          </tr>

          <tr>
            <td>Total:</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>

      <Flex>
        <div style={{ flex: 1 }}>
          <h3 className="sub-title">Billing Address</h3>

          {/* name */}
          <div>
            <span>{order?.first_name} </span>
            <span>{order?.last_name}</span>
          </div>

          {/* street */}
          <div>
            <span>{order?.street_address}</span>
          </div>

          {/* city */}
          <div>
            <span>
              {order?.city}, {order?.state}
            </span>
          </div>

          {/* phone */}
          <div>
            <span>{order?.phone_number}</span>
          </div>

          {/* email */}
          <div>
            <span>{order?.email}</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3 className="sub-title">Shipping Address</h3>

          {/* name */}
          <div>
            <span>{order?.first_name} </span>
            <span>{order?.last_name}</span>
          </div>

          {/* street */}
          <div>
            <span>{order?.street_address}</span>
          </div>

          {/* city */}
          <div>
            <span>
              {order?.city}, {order?.state}
            </span>
          </div>
        </div>
      </Flex>
    </Box>
  );
};
