import create from "zustand";
import { IUpdateItem } from "..";

type IStore = {
  update: boolean;
  setUpdate: (value: boolean) => void;

  updateItems: IUpdateItem[];
  setUpdateItems: (value: IUpdateItem) => void;
};

export const useUpdateCartStore = create<IStore>((set) => ({
  update: false,
  setUpdate: (value) => set((state) => ({ ...state, update: value })),

  updateItems: [],
  setUpdateItems: (value) =>
    set((state) => ({
      ...state,
      updateItems: [
        ...state.updateItems.filter(
          (item) => item.productId !== value.productId
        ),
        value,
      ],
    })),
}));
