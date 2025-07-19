import { useAppStore } from "@/store/store";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response?.status === 401) {
      useAppStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
