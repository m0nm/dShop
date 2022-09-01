import { axios } from "@/lib/axios";

export type IBanner = {
  url: string;
  id: number;
};

export const getBanners = async () =>
  axios.get<IBanner[]>("/api/banners").then((res) => res.data);
