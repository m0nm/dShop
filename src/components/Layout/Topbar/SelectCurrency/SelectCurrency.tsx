import React, { useState } from "react";
import { Icon } from "ts-react-feather-icons";
import * as Select from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectViewport,
} from "@/components/Shared";

type currency = "usd" | "dzd" | "eur";

export const SelectCurrency = () => {
  const [currency, setCurrency] = useState<currency>("usd");

  return (
    <Select.Root
      name="select currency"
      value={currency}
      onValueChange={(value: currency) => setCurrency(value)}
    >
      <SelectTrigger>
        <Select.SelectValue placeholder="usd" />
        <Select.SelectIcon>
          <Icon name="chevron-down" size="12" />
        </Select.SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            <SelectItem value="usd">
              <Select.SelectItemText>Dollar (USD)</Select.SelectItemText>
            </SelectItem>

            <SelectItem value="eur">
              <Select.SelectItemText>Euro (EUR)</Select.SelectItemText>
            </SelectItem>
            <SelectItem value="dzd">
              <Select.SelectItemText>Dinnar (DZD)</Select.SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select.Root>
  );
};
