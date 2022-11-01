import Link from "next/link";
import React from "react";
import { useAccountStore } from "../../../store";
import { IOrder } from "@/features/orders";
import { useGetOrders } from "@/features/orders";
import { Icon } from "ts-react-feather-icons";

export const MyOrders = () => {
  const { data, isLoading } = useGetOrders();
  const { setTabValue } = useAccountStore();

  const handleClick = (order: IOrder) => {
    if (typeof window !== undefined) {
      sessionStorage.setItem("order", JSON.stringify(order));
      setTabValue("order-detail");
    }
  };

  if (!data?.length && !isLoading) {
    return (
      <>
        <h1 className="title">My orders</h1>

        <p>No order has been made yet.</p>

        <Link href="/shop">
          <a className="products-link">
            <span>BROWSE PRODUCTS </span>
            <Icon name="arrow-right" size={12} />
          </a>
        </Link>
      </>
    );
  }

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.tracking_no}</td>
            <td>{new Date(item.created_at).toDateString()}</td>
            <td>{item.status}</td>
            <td>${item.total_price}</td>
            <td style={{ textAlign: "center" }}>
              <button
                onClick={() => handleClick(item)}
                style={{ transform: "scale(0.88)" }}
              >
                view
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
