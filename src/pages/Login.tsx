import { useAppStore } from "@/store/store";
import type { FormEvent } from "react";
import { Navigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const { login, status, error, clearAuthError } = useAppStore();

  const location = useLocation();

  if (status === "authenticated") {
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email && password) {
      try {
        await login({ email, password });
      } catch (err) {
        console.error("Fallo el login:", err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue="test@example.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={clearAuthError}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              defaultValue="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={clearAuthError}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {status === "loading" ? "Cargando..." : "Entrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
