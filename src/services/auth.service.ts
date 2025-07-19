import type { LoginCredentials, User } from "@/types/User";

// Define the structure of the login response
interface LoginResponse {
  user: User;
  token: string;
}

/**
 * Realizes the login action by calling the authentication service.
 * @param credentials - Email and password credentials.
 * @returns A promise that resolves with the user and token.
 */
const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Note: In a real application, the endpoint would be something like '/auth/login'
  // For this example, we'll simulate a successful response.
  // Uncomment the following line to use a real API:
  // const { data } = await apiClient.post<LoginResponse>('/auth/login', credentials);
  // return data;

  // --- Start of simulation ---
  console.log("Simulating API call to login with:", credentials);
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
        reject(new Error("Invalid credentials"));
      }, 1000);
    });
  }
  // --- End of simulation ---
};

export const authService = {
  login,
};
