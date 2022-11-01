import { useQuery } from "react-query";
import { getAccount } from "../api";

export const useGetAccount = () => {
  const { data, isSuccess, isLoading } = useQuery(["account"], () =>
    getAccount()
  );

  return { data, isSuccess, isLoading };
};
