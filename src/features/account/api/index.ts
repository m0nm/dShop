import { axios } from "@/lib/axios";

export type IAccount = {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;

  country?: string;
  state?: string;
  street_address?: string;
  city?: string;
  zip_code?: string;
};

export const getAccount = async (token?: string) => {
  const res = await axios.get<IAccount>("/api/user/account", {
    headers: { authorization: "Bearer " + token },
  });

  return res.data;
};

export const updateAccount = async (data: IAccount) => {
  const res = await axios.put("/api/user/account", data);

  return res.data;
};

export type IChangePassword = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};

export const changePassword = async (data: IChangePassword) => {
  const res = await axios.put("/api/user/change-password", data);

  return res.data;
};

export const deleteUser = async () => {
  const res = await axios.delete("/api/user");

  return res.data;
};
