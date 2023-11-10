import axios from "axios";
import { snakeToCamel } from "./namingStrategies";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

instance.interceptors.request.use((req) => {
  if (req.transitional) {
    req.transitional.silentJSONParsing = false;
    req.transitional.forcedJSONParsing = false;
  }
  return req;
});

instance.interceptors.response.use(
  (res) => {
    return {
      ...res,
      data: !res.data ? {} : snakeToCamel(res.data),
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const client = {
  getBlogPost: async <T>(slug: string): Promise<T> => {
    const { data } = await instance.get(`/blog/${slug}`);
    return data;
  },
};
