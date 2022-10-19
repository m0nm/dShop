import { useQuery } from "react-query";
import { getAccount } from "../api";

export const useGetAccount = () => {
  const { data } = useQuery(["account"], () => getAccount());

  return { data };
};
