import create from "zustand";

export type IStore = {
  filter_subcategories: string[];
  filter_price: [number, number];
  filter_size: "S" | "M" | "L" | "XL" | ["2XL", "XXL"] | undefined;
  filter_sort: "default" | "latest" | "price-low-to-high" | "price-high-to-low";
  filter_page_count: 10 | 15 | 20 | 25 | 30;
  filter_search: string | undefined;
  filter_category: number;

  setFilterSubcategories: (value: IStore["filter_subcategories"]) => void;
  setFilterPrice: (value: IStore["filter_price"]) => void;
  setFilterSize: (value: IStore["filter_size"]) => void;
  setFilterSort: (value: IStore["filter_sort"]) => void;
  setFilterPageCount: (value: IStore["filter_page_count"]) => void;
  setFilterSearch: (value: IStore["filter_search"]) => void;
  setFilterCategory: (value: IStore["filter_category"]) => void;
};

export const useShopProductStore = create<IStore>((set) => ({
  filter_subcategories: [],
  filter_price: [0, 1200],
  filter_size: undefined,
  filter_sort: "default",
  filter_page_count: 10,
  filter_search: undefined,
  filter_category: -1,

  setFilterSubcategories: (value) =>
    set((state) => ({ ...state, filter_subcategories: value })),

  setFilterPrice: (value) =>
    set((state) => ({ ...state, filter_price: value })),

  setFilterSize: (value) => set((state) => ({ ...state, filter_size: value })),

  setFilterSort: (value) => set((state) => ({ ...state, filter_sort: value })),

  setFilterPageCount: (value) =>
    set((state) => ({ ...state, filter_page_count: value })),

  setFilterSearch: (value) =>
    set((state) => ({ ...state, filter_search: value })),

  setFilterCategory: (value) =>
    set((state) => ({ ...state, filter_category: value })),
}));
