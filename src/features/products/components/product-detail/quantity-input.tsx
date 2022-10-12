import React, { FormEvent } from "react";
import { Icon } from "ts-react-feather-icons";
import { ProductQuantity } from "./product-detail.styles";

type IQuantity = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export const QuantityInput = ({ quantity, setQuantity }: IQuantity) => {
  const increaseQuant = () => setQuantity((old) => old + 1);
  const decreaseQuant = () => setQuantity((old) => (old > 0 ? old - 1 : old));

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);

    if (value > 100) return;

    if (typeof value !== "number") return;

    setQuantity(value);
  };

  return (
    <ProductQuantity>
      <button onClick={decreaseQuant}>
        <Icon name="minus" size={14} />
      </button>
      <input
        value={quantity}
        onChange={handleChange}
        type="number"
        min="0"
        step="1"
        max="100"
        inputMode="numeric"
      />
      <button onClick={increaseQuant}>
        <Icon name="plus" size={14} />
      </button>
    </ProductQuantity>
  );
};
