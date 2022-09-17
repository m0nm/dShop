import React from "react";
import { Icon } from "ts-react-feather-icons";
import { useCurrencyStore } from "@/store/currencyStore";
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "./selectCurrency.styles";

export const SelectCurrency = () => {
  const { currency, setCurrency } = useCurrencyStore();

  return (
    <SelectRoot
      name="select currency"
      value={currency}
      onValueChange={(value: typeof currency) => setCurrency(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder="usd" />
        <SelectIcon>
          <Icon name="chevron-down" size="12" />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            <SelectItem value="usd">
              <SelectItemText>Dollar (USD)</SelectItemText>
            </SelectItem>

            <SelectItem value="eur">
              <SelectItemText>Euro (EUR)</SelectItemText>
            </SelectItem>
            <SelectItem value="dzd">
              <SelectItemText>Dinnar (DZD)</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};
