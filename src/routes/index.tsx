import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
} from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AboutPage from "@/pages/About";
import LoginPage from "@/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "@/pages/Dashboard";
import ErrorPage from "@/pages/Error";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
        ],
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
