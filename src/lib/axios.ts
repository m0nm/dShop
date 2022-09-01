import Axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@/config";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie("token");
  if (config.headers) {
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json";
  }
  return config;
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { errors } = error.response?.data;

    const message = Object.values<any>(errors)[0][0] || error.message;
    toast.error(message);

    return Promise.reject(error);
  }
);
