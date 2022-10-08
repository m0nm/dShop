import { useCurrencyStore } from "@/store/currencyStore";

export const useConvertCurrency = () => {
  const { currency } = useCurrencyStore();

  const convertCurrency = (value: number) => {
    // show only two numbers after decimal
    const price = Math.round(currency === "dzd" ? value * 120 : value).toFixed(
      2
    );

    if (value === null) return;

    if (currency === "usd") return `$${price}`;

    if (currency === "eur") return `€${price}`;

    if (currency === "dzd") {
      return `${price}DA`;
    }
  };

  return { convertCurrency };
};
