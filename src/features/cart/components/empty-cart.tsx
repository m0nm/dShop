import Image from "next/image";
import React from "react";
import { BackButton } from "./go-back-button";
import cart from "@/../public/icons/cart.svg";

const style = {
  textAlign: "center",
  margin: "auto",
  height: "40vh",
  display: "grid",
  placeItems: "center",
};

export const EmptyCart = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        height: "50vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <>
        <Image src={cart} alt="" width={120} height={120} />

        <div>
          <small style={{ display: "block" }}>
            Your cart is currently empty
          </small>
          <BackButton />
        </div>
      </>
    </div>
  );
};
