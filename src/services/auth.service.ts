import type { LoginCredentials, User } from "@/types/User";

// Define la estructura de la respuesta del login
interface LoginResponse {
  user: User;
  token: string;
}

/**
 * Realiza la llamada a la API para iniciar sesión.
 * @param credentials - Credenciales de email y contraseña.
 * @returns Una promesa que resuelve con el usuario y el token.
 */
const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Nota: En una aplicación real, el endpoint sería algo como '/auth/login'
  // Para este ejemplo, simularemos una respuesta exitosa.
  // Descomenta la siguiente línea para usar una API real:
  // const { data } = await apiClient.post<LoginResponse>('/auth/login', credentials);
  // return data;

  // --- Inicio de la simulación ---
  console.log("Simulando llamada a la API de login con:", credentials);
  if (
    credentials.email === "test@example.com" &&
    credentials.password === "password"
  ) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { id: "1", name: "Test User", email: "test@example.com" },
          token: "fake-jwt-token",
        });
      }, 1000);
    });
  } else {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Credenciales inválidas"));
      }, 1000);
    });
  }
  // --- Fin de la simulación ---
};

export const authService = {
  login,
};
