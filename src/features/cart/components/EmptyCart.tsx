import React from "react";
import { BackButton } from "./BackButton";

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
      <div>
        <small style={{ display: "block" }}>Your cart is currently empty</small>
        <BackButton />
      </div>
    </div>
  );
};
