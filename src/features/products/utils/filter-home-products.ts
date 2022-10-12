import { IProduct } from "../api";

export const filterSaleProducts = (products: IProduct[] | undefined) => {
  return products?.filter((product) => product.sale_price !== null);
};

export const filterLatestProducts = (products: IProduct[] | undefined) => {
  return products?.filter((product) => product.condition === "new");
};

export const filterFeaturedProducts = (products: IProduct[] | undefined) => {
  return products?.filter((product) => product.condition === "featured");
};
