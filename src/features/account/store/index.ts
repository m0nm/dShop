import create from "zustand";

type IStore = {
  tabValue: "details" | "orders" | "order-detail" | "address" | "settings";
  setTabValue: (value: IStore["tabValue"]) => void;
};

export const useAccountStore = create<IStore>((set) => ({
  tabValue: "details",

  setTabValue: (value) =>
    set((state) => ({
      tabValue: value,
    })),
}));
