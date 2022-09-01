import { axios } from "@/lib/axios";

export type INewUser = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const registerUser = (user: INewUser) => {
  return axios
    .post<INewUser, any>("/api/register", user)
    .then((res) => res.data);
};

export type IUser = {
  email: string;
  password: string;
  remember_me: boolean;
};

export const loginUser = (user: IUser) => {
  return axios.post<IUser, any>("/api/login", user).then((res) => res.data);
};

export const logoutUser = () => {
  return axios.get("/api/user/logout");
};

export const loginSocial = (provider: "facebook" | "google") => {
  return axios.get(`/api/auth/${provider}/redirect`);
};

export const forgotPassword = (email: string) => {
  return axios.post("/api/user/forgot", { email }).then((res) => res.data);
};

export type IResetPassword = {
  token: string | string[] | undefined;
  password: string;
  password_confirmation: string;
};

export const resetPassword = (data: IResetPassword) => {
  return axios
    .post<IResetPassword, any>("/api/user/reset", data)
    .then((res) => res.data);
};
