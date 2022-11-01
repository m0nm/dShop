import create from "zustand";
import { ICoupon } from "..";

type IStore = {
  total: number;
  setTotal: (value: number) => void;

  coupon: ICoupon & { isApplied: boolean };
  setCoupon: (value: ICoupon) => void;
};

const handleState = (coupon: ICoupon, total: IStore["total"]) => {
  if (coupon.type === "percent") {
    total *= coupon.value / 100;
  } else {
    const isPositive = total - coupon.value > 0;

    total = isPositive ? total - coupon.value : 0;
  }

  return { total, coupon: { ...coupon, isApplied: true } };
};

export const useCartTotalStore = create<IStore>((set) => ({
  total: 0,
  setTotal: (value) => set((state) => ({ ...state, total: value })),

  coupon: { code: "", value: 0, type: "fixed", isApplied: false },
  setCoupon: (value) =>
    set((state) => ({ ...state, ...handleState(value, state.total) })),
}));
