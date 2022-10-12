import React, { ReactNode, useState } from "react";
import { AttributeGroup } from "./product-detail.styles";

type IAttribute = {
  initialValue: string;
  children: ReactNode;
};

export const ProductAttributes = ({ initialValue, children }: IAttribute) => {
  const [value, setValue] = useState(initialValue);

  return (
    <AttributeGroup
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      {children}
    </AttributeGroup>
  );
};
