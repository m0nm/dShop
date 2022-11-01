import { useCurrencyStore } from "@/store/currency-store";

export const useConvertCurrency = () => {
  const { currency } = useCurrencyStore();

  const convertCurrency = (value: number) => {
    if (value === null) return;

    // show only two numbers after decimal
    const price = currency === "dzd" ? value * 120 : value.toFixed(2);

    if (currency === "usd") return `$${price}`;

    if (currency === "eur") return `€${price}`;

    if (currency === "dzd") {
      return `${price}DA`;
    }
  };

  return { convertCurrency };
};
