import axios, { AxiosRequestConfig } from "axios";

export interface FetchRes<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea4de890898c4ca390902e9513d08a0e",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRes<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
