import Link from "next/link";
import React from "react";
import { Icon } from "ts-react-feather-icons";

export const MyOrders = () => {
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
};
