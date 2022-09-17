import { useCurrencyStore } from "@/store/currencyStore";

export const useConvertCurrency = (value: number) => {
  const { currency } = useCurrencyStore();

  if (value === null) return;

  if (currency === "usd") return `$${value}`;

  if (currency === "eur") return `€${value}`;

  if (currency === "dzd") {
    // show only two numbers after decimal
    const price = (Math.round(value * 120 * 100) / 100).toFixed(2);

    return `${price}DA`;
  }
};
