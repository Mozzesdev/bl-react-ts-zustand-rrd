import { useAppStore } from "@/store/store";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000", // URL de la API desde variables de entorno
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = useAppStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response?.status === 401) {
      const { logout } = useAppStore.getState();
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
