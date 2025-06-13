import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Token } from './token';

// const BACKEND_URL = 'https://5c5bc9a6fa9d36c2.mokky.dev';
// const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const BACKEND_URL = 'https://12.react.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = Token.get();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
