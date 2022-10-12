import create from "zustand";

type IStore = {
  total: number;
  setTotal: (value: number) => void;

  couponCode: string;
  setCouponCode: (value: string) => void;
};

export const useCartTotalStore = create<IStore>((set) => ({
  total: 0,
  setTotal: (value) => set((state) => ({ ...state, total: value })),

  couponCode: "",
  setCouponCode: (value) => set((state) => ({ ...state, couponCode: value })),
}));
