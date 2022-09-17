import create from "zustand";

type IStore = {
  currency: "usd" | "eur" | "dzd";
  setCurrency: (value: IStore["currency"]) => void;
};

export const useCurrencyStore = create<IStore>((set) => ({
  currency: "usd",
  setCurrency: (value) => set((state) => ({ currency: value })),
}));
