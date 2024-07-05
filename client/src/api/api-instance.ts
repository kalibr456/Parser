import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
