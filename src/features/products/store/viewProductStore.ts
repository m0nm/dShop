import create from "zustand";
import { IProduct } from "..";

type IStore = {
  open: boolean;
  setOpen: (value: boolean) => void;
  product: IProduct | null;
  setProduct: (value: IProduct) => void;
};

export const useViewProductStore = create<IStore>((set) => ({
  open: false,
  setOpen: (value) => set((state) => ({ open: value })),

  product: null,
  setProduct: (value) => set((state) => ({ product: value })),
}));
